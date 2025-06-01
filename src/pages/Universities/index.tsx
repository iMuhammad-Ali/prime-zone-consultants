import UniversityCard from "~/components/Cards/UniversityCard";
import { University } from "~/types/university";
import universitiesData from "~/data/universities.json";

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
      {universitiesData?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-5">
            {universitiesData.map((university: University) => (
              <div key={university.id} className="h-full">
                <UniversityCard university={university} />
              </div>
            ))}
          </div>
          {/* <div className="text-center">
            <Button
              variant="outline"
              className="mt-12 w-[150px] py-3 border-white/50"
            >
              Load More
            </Button>
          </div> */}
        </>
      ) : (
        <p className="text-center mt-8 text-xl">No universities found</p>
      )}
    </section>
  );
};

export default Universities;
