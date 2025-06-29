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
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">
            Platform performance insights
          </h2>
          <p>Ensuring stability and scalability for all users</p>
          <a
            href="/"
            className="flex items-center gap-1 font-bold text-primary-foreground hover:underline"
          >
            Read the full impact report
            <ArrowRight className="h-auto w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };
