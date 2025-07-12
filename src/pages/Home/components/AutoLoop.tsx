import AutoLoopSlider from "~/components/Framer/AutoLoopSlider";

function AutoLoop() {
  return (
    <AutoLoopSlider>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">🎓</span>
        <span>New scholarships available for 2025 intake</span>
      </span>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">✈️</span>
        <span>Visa success rate increased to 98% this year</span>
      </span>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">�</span>
        <span>New partnerships with top European universities</span>
      </span>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">🏆</span>
        <span>500+ students successfully placed in 2024</span>
      </span>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">💼</span>
        <span>Free career counseling sessions now available</span>
      </span>
      <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
        <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">🚀</span>
        <span>Fast-track application process - Get decisions in 2 weeks</span>
      </span>
    </AutoLoopSlider>
  );
}

export default AutoLoop;
