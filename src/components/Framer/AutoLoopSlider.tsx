import {
  motion,
  useAnimationFrame,
  useSpring,
  useTransform,
} from "framer-motion";
import React from "react";
import { useRef, useState } from "react";

interface AutoLoopSliderProps {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}
export default function AutoLoopSlider({
  speed = 0.8, // Speed in pixels per second
  children,
  className = "",
}: AutoLoopSliderProps) {
  const baseX = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // This spring animates the `baseX` position
  const smoothX = useSpring(0, { damping: 20, stiffness: 100 });
  const x = useTransform(smoothX, (v) => `${v % 100}%`);
  //Here we can get the current time and delta time to perform action after some time of animation
  useAnimationFrame((_, delta) => {
    if (!isPaused) {
      baseX.current -= (speed / 1000) * delta;
      smoothX.set(baseX.current);
    }
  });

  return (
    <div
      className={`relative mb-3 top-0 overflow-hidden w-full bg-muted h-[8vw] sm:h-[4vw] lg:h-[3vw] xl:h-[2vw] 2xl:h-[2vw] from-primary/10 to-primary/5 cursor-pointer ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Latest News Label */}
      <div className="absolute h-full left-0 top-0 z-10 bg-primary text-primary-foreground px-[3vw] sm:px-[2vw] lg:px-[1.5vw] xl:px-[1vw] 2xl:px-[0.8vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.8vw] font-semibold uppercase shadow-lg">
        <div className="flex items-center justify-center h-full">
          Latest News
        </div>
      </div>

      {/* Scrolling Content */}
      <motion.div
        className="absolute whitespace-nowrap flex items-center gap-[8vw] sm:gap-[6vw] lg:gap-[4vw] xl:gap-[3vw] 2xl:gap-[2.5vw] h-full pl-[20vw] sm:pl-[15vw] lg:pl-[12vw] xl:pl-[10vw] 2xl:pl-[8vw] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.4vw] xl:text-[1.1vw] 2xl:text-[0.9vw] text-foreground/80 font-medium"
        style={{ x }}
      >
        {/* Create seamless infinite loop with multiple copies */}
        {Array.from({ length: 4 }, (_, copyIndex) => (
          <div
            key={copyIndex}
            className="flex items-center gap-[8vw] sm:gap-[6vw] lg:gap-[4vw] xl:gap-[3vw] 2xl:gap-[2.5vw] mr-[8vw] sm:mr-[6vw] lg:mr-[4vw] xl:mr-[3vw] 2xl:mr-[2.5vw]"
          >
            {React.Children.map(children, (child, index) => (
              <React.Fragment key={`${copyIndex}-${index}`}>
                {index > 0 && (
                  <span className="text-primary text-[2vw] sm:text-[1.5vw] lg:text-[1.2vw] xl:text-[0.8vw] 2xl:text-[0.6vw]">
                    •
                  </span>
                )}
                <span className="hover:text-primary transition-colors duration-300">
                  {child}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 w-[15vw] sm:w-[12vw] lg:w-[10vw] xl:w-[8vw] 2xl:w-[6vw] h-full bg-gradient-to-r from-[#001d4d] to-transparent z-5"></div>
      <div className="absolute right-0 top-0 w-[15vw] sm:w-[12vw] lg:w-[10vw] xl:w-[8vw] 2xl:w-[6vw] h-full bg-gradient-to-l from-[#001d4d] to-transparent z-5"></div>
    </div>
  );
}
