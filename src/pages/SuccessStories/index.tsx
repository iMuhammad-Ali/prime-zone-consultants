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
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          {description}
        </p>
      </div>
      <div className="relative flex justify-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
          {letters.map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-transparent rounded-lg shadow p-6 border"
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
                      className="absolute top-5 right-6 text-white text-4xl font-bold hover:text-red-400 transition"
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
