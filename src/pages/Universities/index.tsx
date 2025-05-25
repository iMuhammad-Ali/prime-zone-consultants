import UniversityCard from "~/components/Cards/UniversityCard";
import { Button } from "~/components/ui/button";
import { UniversityData } from "~/types/university";

const universities = [
  {
    id: "item-1",
    title: "Build Modern UIs",
    summary:
      "Create stunning user interfaces with our comprehensive design system.",
    url: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    id: "item-2",
    title: "Computer Vision Technology",
    summary:
      "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
    url: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    id: "item-3",
    title: "Machine Learning Automation",
    summary:
      "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
    url: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    id: "item-4",
    title: "Predictive Analytics",
    summary:
      "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
    url: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
  {
    id: "item-5",
    title: "Neural Network Architecture",
    summary:
      "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
    url: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
  },
];

const Universities = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Universities
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Explore a curated list of top universities from around the world.
          Discover academic programs, campus highlights, and what makes each
          institution unique to help you make informed education choices.
        </p>
      </div>
      {universities?.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {universities.map((university: UniversityData) => (
              <UniversityCard university={university} />
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="mt-12 w-[150px] py-3 border-white/50"
            >
              Load More
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No universities found</p>
      )}
    </section>
  );
};

export default Universities;
