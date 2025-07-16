import letter1 from "../../assets/images/letter-1.jpeg";
import letter2 from "../../assets/images/letter-2.jpeg";
import letter3 from "../../assets/images/letter-3.jpeg";
import letter4 from "../../assets/images/letter-4.jpeg";
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
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { Card } from "~/components/ui/card";

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
  const [activeCountry, setActiveCountry] = useState<string>("Italy");

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
    ],
    // Germany: [],
    // France: [],
  };

  return (
    <section className="py-[20vw] sm:py-[15vw] lg:py-[6vw]">
      <div className="flex flex-col items-center text-center px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        <h2 className="my-[4vw] sm:my-[3vw] lg:my-[1.5vw] text-[5vw] sm:text-[4vw] lg:text-4xl font-bold text-pretty">
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
            className={`px-[4vw] sm:px-[3vw] lg:px-[1.5vw] py-[2vw] sm:py-[1.5vw] lg:py-[0.8vw]  font-semibold transition-all duration-300 ${
              activeCountry === country
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-background border border-border text-foreground hover:bg-muted hover:scale-102"
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
                            setSelectedImage(img);
                            setIsFullscreen(true);
                          }}
                        />
                      ) : selectedImage === img ? (
                        <div
                          className="fixed inset-0 z-[10001] bg-neutral-800 bg-opacity-80 flex items-center justify-center"
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
                            src={selectedImage || ""}
                            alt="Full View"
                            className="max-w-[100%] max-h-[100%] rounded-xl 2xl:rounded-[0.5vw] shadow-xl object-contain"
                          />
                        </div>
                      ) : (
                        <img
                          src={img}
                          alt={`${activeCountry} Success Letter ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => {
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
