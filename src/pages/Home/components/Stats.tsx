import { ArrowRight } from "lucide-react";

interface StatsProps {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats = ({
  // heading = "Platform performance insights",
  // description = "Ensuring stability and scalability for all users",
  // link = {
  //   text: "Read the full impact report",
  //   url: "/",
  // },
  stats = [
    {
      id: "stat-1",
      value: "97%",
      label: "Visa success rate for our clients",
    },
    {
      id: "stat-2",
      value: "1500+",
      label: "Students successfully placed in top universities worldwide",
    },
    {
      id: "stat-3",
      value: "10+",
      label: "Countries covered for study abroad programs",
    },
    {
      id: "stat-4",
      value: "98%",
      label: "Student satisfaction rate post-placement",
    },
  ],
}: StatsProps) => {
  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw]">
      <div>
        <div className="flex flex-col gap-[2vw] sm:gap-[1.5vw] lg:gap-[1vw]">
          <h2 className="text-[5vw] sm:text-[4vw] lg:text-[2.5vw] font-bold">
            Platform performance insights
          </h2>
          <p className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] 2xl:text-[1.2vw]">
            Ensuring stability and scalability for all users
          </p>
          <a
            href="/"
            className="flex items-center gap-[1vw] sm:gap-[0.75vw] lg:gap-[0.25vw] font-bold text-primary-foreground hover:underline text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw]"
          >
            Read the full impact report
            <ArrowRight className="h-auto w-[4vw] sm:w-[3vw] lg:w-[1vw]" />
          </a>
        </div>
        <div className="mt-[6vw] sm:mt-[4vw] lg:mt-[3.5vw] grid gap-x-[3vw] gap-y-[4vw] sm:gap-x-[2vw] sm:gap-y-[3vw] lg:gap-x-[1.25vw] lg:gap-y-[2vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-[2vw] sm:gap-[1.5vw] lg:gap-[1.25vw]"
            >
              <div className="text-[8vw] sm:text-[6vw] lg:text-[4vw] 2xl:text-[4.5vw] font-bold">
                {stat.value}
              </div>
              <p className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] 2xl:text-[1.2vw]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };
