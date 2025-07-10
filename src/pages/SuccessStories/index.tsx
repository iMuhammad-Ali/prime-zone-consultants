import letter1 from "../../assets/images/letter-1.jpeg";
import letter2 from "../../assets/images/letter-2.jpeg";
import letter3 from "../../assets/images/letter-3.jpeg";
import letter4 from "../../assets/images/letter-4.jpeg";
import letter5 from "../../assets/images/letter-5.jpeg";
import letter6 from "../../assets/images/letter-6.jpeg";
import letter7 from "../../assets/images/letter-7.jpeg";
import letter8 from "../../assets/images/letter-8.jpeg";
import letter9 from "../../assets/images/letter-9.jpeg";
import letter10 from "../../assets/images/letter-10.jpeg";
import letter11 from "../../assets/images/letter-11.jpeg";
import letter12 from "../../assets/images/letter-12.jpeg";
import letter13 from "../../assets/images/letter-13.jpeg";
import letter14 from "../../assets/images/letter-14.jpeg";
import letter15 from "../../assets/images/letter-15.jpeg";
import letter16 from "../../assets/images/letter-16.jpeg";
import letter17 from "../../assets/images/letter-17.jpeg";
import letter18 from "../../assets/images/letter-18.jpeg";
import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface SuccessStoriesProps {
  heading?: string;
  description?: string;
  feature1?: Feature;
  feature2?: Feature;
  feature3?: Feature;
  feature4?: Feature;
}

const SuccessStories = ({
  heading = "Success Stories",
  description = "Real results. Real impact. Explore the success stories that define our consultancy’s commitment to excellence.From ambitious startups to established enterprises, our tailored strategies have transformed challenges into milestones. Let these journeys inspire your next big leap.",
}: // feature1 = {
//   title: "Letter 1",
//   description: "Success Story 1",
//   image: letter1,
// },
// feature2 = {
//   title: "Letter 2",
//   description: "Success Story 2",
//   image: letter2,
// },
// feature3 = {
//   title: "Letter 3",
//   description: "Success Story 3",
//   image: letter3,
// },
// feature4 = {
//   title: "Letter 4",
//   description: "Success Story 4",
//   image: letter4,
// },
// ...

SuccessStoriesProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const letters = [
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    letter6,
    letter7,
    letter8,
    letter9,
    letter10,
    letter11,
    letter12,
    letter13,
    letter14,
    letter15,
    letter16,
    letter17,
    letter18,
  ];

  return (
    <section className="py-[10vw] sm:py-[8vw] lg:py-[6vw]">
      <div className="flex flex-col items-center text-center px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <h2 className="my-[4vw] sm:my-[3vw] lg:my-[1.5vw] text-[5vw] sm:text-[4vw] lg:text-[2vw] font-bold text-pretty">
          {heading}
        </h2>
        <p className="mb-[6vw] sm:mb-[4vw] lg:mb-[2vw] max-w-[90vw] sm:max-w-[70vw] lg:max-w-[50vw] text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1.25vw]">
          {description}
        </p>
      </div>
      <div className="relative flex justify-center mt-[6vw] sm:mt-[4vw] lg:mt-[4vw] px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw] w-full max-w-7xl">
          {letters.map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-transparent rounded-lg shadow p-[4vw] sm:p-[3vw] lg:p-[1.5vw] border"
            >
              <div className="w-full aspect-[4/5] bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
                {!isFullscreen ? (
                  <img
                    src={img}
                    alt={`Success Letter ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img);
                      setIsFullscreen(true);
                    }}
                  />
                ) : selectedImage === img ? (
                  <div
                    className="fixed inset-0 z-50 bg-neutral-800 bg-opacity-80 flex items-center justify-center"
                    onClick={() => {
                      setSelectedImage(null);
                      setIsFullscreen(false);
                    }}
                  >
                    <button
                      className="absolute top-[3vw] sm:top-[2vw] lg:top-[1.25vw] right-[4vw] sm:right-[3vw] lg:right-[1.5vw] text-white text-[8vw] sm:text-[6vw] lg:text-[3vw] font-bold hover:text-red-400 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                        setIsFullscreen(false);
                      }}
                    >
                      &times;
                    </button>
                    <img
                      src={selectedImage}
                      alt="Full View"
                      className="max-w-[90%] max-h-[95%] rounded-xl shadow-xl object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={img}
                    alt={`Success Letter ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img);
                      setIsFullscreen(true);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
