import letter1 from "../../assets/images/Italy/letter-1.jpeg";
import letter2 from "../../assets/images/Italy/letter-2.jpeg";
import letter3 from "../../assets/images/Italy/letter-3.jpeg";
import letter4 from "../../assets/images/Italy/letter-4.jpeg";
import letter6 from "../../assets/images/Italy/letter-6.jpeg";
import letter7 from "../../assets/images/Italy/letter-7.jpeg";
import letter8 from "../../assets/images/Italy/letter-8.jpeg";
import letter9 from "../../assets/images/Italy/letter-9.jpeg";
import letter10 from "../../assets/images/Italy/letter-10.jpeg";
import letter11 from "../../assets/images/Italy/letter-11.jpeg";
import letter12 from "../../assets/images/Italy/letter-12.jpeg";
import letter13 from "../../assets/images/Italy/letter-13.jpeg";
import letter14 from "../../assets/images/Italy/letter-14.jpeg";
import letter15 from "../../assets/images/Italy/letter-15.jpeg";
import letter16 from "../../assets/images/Italy/letter-16.jpeg";
import letter17 from "../../assets/images/Italy/letter-17.jpeg";
import letter18 from "../../assets/images/Italy/letter-18.jpeg";
import letter19 from "../../assets/images/Italy/letter-19.jpeg";
import letter20 from "../../assets/images/Italy/letter-20.jpeg";
import letter21 from "../../assets/images/Italy/letter-21.jpeg";
import kyr1 from "../../assets/images/Kyrgyzstan/kyr1.jpeg";
import kyr2 from "../../assets/images/Kyrgyzstan/kyr2.jpeg";
import kyr3 from "../../assets/images/Kyrgyzstan/kyr3.jpeg";
import kyr4 from "../../assets/images/Kyrgyzstan/kyr4.jpeg";
import kyr5 from "../../assets/images/Kyrgyzstan/kyr5.jpeg";
import kyr6 from "../../assets/images/Kyrgyzstan/kyr6.jpeg";
import kyr7 from "../../assets/images/Kyrgyzstan/kyr7.jpeg";
import kyr8 from "../../assets/images/Kyrgyzstan/kyr8.jpeg";
import kyr9 from "../../assets/images/Kyrgyzstan/kyr9.jpeg";
import kyr10 from "../../assets/images/Kyrgyzstan/kyr10.jpeg";
import kyr11 from "../../assets/images/Kyrgyzstan/kyr11.jpeg";
import { Button } from "~/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [activeCountry, setActiveCountry] = useState<string>("Italy");

  // Navigation functions for fullscreen mode
  const navigateImage = (direction: "prev" | "next") => {
    const currentImages =
      countryStories[activeCountry as keyof typeof countryStories];
    if (direction === "prev") {
      const newIndex =
        selectedImageIndex > 0
          ? selectedImageIndex - 1
          : currentImages.length - 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    } else {
      const newIndex =
        selectedImageIndex < currentImages.length - 1
          ? selectedImageIndex + 1
          : 0;
      setSelectedImageIndex(newIndex);
      setSelectedImage(currentImages[newIndex]);
    }
  };

  // Keyboard navigation
  const handleKeyPress = (e: KeyboardEvent) => {
    if (isFullscreen) {
      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "Escape") {
        setSelectedImage(null);
        setIsFullscreen(false);
      }
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFullscreen, selectedImageIndex]);

  // Organize letters by country (you can adjust the distribution as needed)
  const countryStories = {
    Italy: [
      letter1,
      letter2,
      letter3,
      letter4,
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
      letter19,
      letter20,
      letter21,
    ],
    Kyrgyzstan: [
      kyr1,
      kyr2,
      kyr3,
      kyr4,
      kyr5,
      kyr6,
      kyr7,
      kyr8,
      kyr9,
      kyr10,
      kyr11,
    ],
    // France: [],
  };

  return (
    <section className="py-[20vw] sm:py-[15vw] lg:py-[6vw]">
      <div className="flex flex-col items-center text-center px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
          {heading}
        </h2>
        <p className="mb-[6vw] sm:mb-[4vw] lg:mb-[2vw] max-w-[90vw] sm:max-w-[70vw] lg:max-w-[50vw] text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-sm">
          {description}
        </p>
      </div>

      {/* Country Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[1vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] mb-[6vw] sm:mb-[4vw] lg:mb-[3vw]">
        {Object.keys(countryStories).map((country) => (
          <Button
            key={country}
            onClick={() => setActiveCountry(country)}
            className={`px-[7vw] text-[5vw] sm:px-[4vw] lg:px-[3vw] py-[6vw] sm:text-[2vw] md:text-[2.75vw] sm:py-[2.5vw] lg:py-[2vw] lg:text-[2vw] xl:px-[3vw] xl:py-[2vw] xl:text-[1.75vw] 2xl:px-[2vw] 2xl:py-[1.5vw] 2xl:text-[1.5vw]  font-semibold transition-all ${
              activeCountry === country
                ? " animate-pulse-colors text-white shadow-lg scale-105"
                : "bg-white text-background hover:bg-card hover:text-white hover:scale-102"
            }`}
          >
            {country}
          </Button>
        ))}
      </div>

      {/* Active Country Section */}
      <div className="px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <div className="flex flex-col items-center text-center mb-[4vw] sm:mb-[3vw] lg:mb-[2vw]">
          <h3 className="text-[4vw] sm:text-[3vw] lg:text-2xl font-semibold text-foreground mb-[2vw] sm:mb-[1.5vw] lg:mb-[1vw]">
            {activeCountry} Success Stories
          </h3>
          <div className="w-[12vw] sm:w-[8vw] lg:w-[4vw] h-[0.5vw] sm:h-[0.3vw] lg:h-[0.2vw] bg-primary rounded-full"></div>
        </div>

        {/* Stories Grid or No Stories Message */}
        {countryStories[activeCountry as keyof typeof countryStories].length >
        0 ? (
          <div className="relative flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw] w-full max-w-7xl 2xl:max-w-full">
              {countryStories[activeCountry as keyof typeof countryStories].map(
                (img: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-transparent rounded-lg 2xl:rounded-[0.5vw] shadow p-[3vw] sm:p-[2vw] lg:p-[1vw] border"
                  >
                    <div className="w-full aspect-[4/5] bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
                      {!isFullscreen ? (
                        <img
                          src={img}
                          alt={`${activeCountry} Success Letter ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => {
                            setSelectedImageIndex(idx);
                            setSelectedImage(img);
                            setIsFullscreen(true);
                          }}
                        />
                      ) : selectedImage === img ? (
                        <div
                          className="fixed inset-0 z-[10001] bg-neutral-700 bg-opacity-40 flex items-center justify-center"
                          onClick={() => {
                            setSelectedImage(null);
                            setIsFullscreen(false);
                          }}
                        >
                          <button
                            className="absolute top-[3vw] sm:top-[2vw] lg:top-[1.25vw] right-[4vw] sm:right-[3vw] lg:right-[1.5vw] text-white text-[8vw] sm:text-[6vw] lg:text-[3vw] font-bold hover:text-red-400 transition z-[10002]"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(null);
                              setIsFullscreen(false);
                            }}
                          >
                            &times;
                          </button>

                          {/* Previous Button */}
                          <button
                            className="absolute left-[4vw] sm:left-[3vw] lg:left-[2vw] top-1/2 transform -translate-y-1/2 text-white text-[6vw] sm:text-[4vw] lg:text-[2vw] font-bold hover:text-blue-400 transition z-[10002] bg-gray-700 bg-opacity-50 rounded-full w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[4vw] lg:h-[4vw] flex items-center justify-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage("prev");
                            }}
                          >
                            <ChevronLeft className="w-6 h-6 2xl:w-[2vw] 2xl:h-[2vw]" />
                          </button>

                          {/* Next Button */}
                          <button
                            className="absolute right-[4vw] sm:right-[3vw] lg:right-[2vw] top-1/2 transform -translate-y-1/2 text-white text-[6vw] sm:text-[4vw] lg:text-[2vw] font-bold hover:text-blue-400 transition z-[10002] bg-gray-700 bg-opacity-50 rounded-full w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[4vw] lg:h-[4vw] flex items-center justify-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage("next");
                            }}
                          >
                            <ChevronRight className="w-6 h-6 2xl:w-[2vw] 2xl:h-[2vw]" />
                          </button>

                          {/* Image Counter */}
                          <div className="absolute bottom-[4vw] sm:bottom-[3vw] lg:bottom-[2vw] left-1/2 transform -translate-x-1/2 text-white text-[3vw] sm:text-[2vw] lg:text-sm font-medium bg-black bg-opacity-50 px-[3vw] sm:px-[2vw] lg:px-4 py-[1vw] sm:py-[0.5vw] lg:py-2 rounded-full z-[10002]">
                            {selectedImageIndex + 1} /{" "}
                            {
                              countryStories[
                                activeCountry as keyof typeof countryStories
                              ].length
                            }
                          </div>

                          <div className="absolute w-screen h-screen inset-0 z-[10000] bg-black bg-opacity-80 flex items-center justify-center">
                            <img
                              src={selectedImage || ""}
                              alt="Full View"
                              className="max-w-[100%]  max-h-[100%] rounded-xl 2xl:rounded-[0.5vw] shadow-xl object-contain"
                            />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={img}
                          alt={`${activeCountry} Success Letter ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => {
                            setSelectedImageIndex(idx);
                            setSelectedImage(img);
                            setIsFullscreen(true);
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <Card className="flex flex-col items-center justify-center py-[8vw] sm:py-[6vw] lg:py-[4vw] text-center">
            <div className="text-[8vw] sm:text-[6vw] lg:text-[4vw] mb-[2vw] sm:mb-[1.5vw] lg:mb-[1vw] text-muted-foreground">
              📋
            </div>
            <h4 className="text-[4vw] sm:text-[3vw] lg:text-xl font-semibold text-foreground mb-[1vw] sm:mb-[0.75vw] lg:mb-[0.5vw]">
              No Success Stories
            </h4>
            <p className="text-[3vw] sm:text-[2vw] lg:text-sm text-muted-foreground max-w-[60vw] sm:max-w-[50vw] lg:max-w-[40vw]">
              We don't have any success stories for {activeCountry} yet. Check
              back soon for updates!
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;
