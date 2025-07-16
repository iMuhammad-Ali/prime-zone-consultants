import { Badge } from "~/components/ui/badge";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
};

export interface WhyChooseUsProps {
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
  className?: string;
}

const defaultChangelogData: ChangelogEntry[] = [
  {
    version: "Course Selection",
    date: "6–12 months before intake",
    title: "Personalized Guidance",
    description:
      "We help you choose the best course, university, and country based on your profile.",
    items: [
      "Comprehensive profile assessments to align with academic goals.",
      "Tailored university and course recommendations.",
      "Insights into country-specific education systems.",
      "Guidance on scholarship and funding opportunities.",
      "Support in aligning choices with career aspirations.",
    ],
    image:
      "https://media.istockphoto.com/id/1467894822/photo/close-up-shot-red-darts-arrows-in-the-target-of-dartboard-center-on-dark-blue-sky-background.jpg?s=612x612&w=0&k=20&c=0EuDigKqdjz65vWeMrF3UDUj7D06Kmewi4mhXTM8VO8=",
  },
  {
    version: "Application Process",
    date: "4–6 months before intake",
    title: "Expert Application Support",
    description: "From SOPs to CVs, we make your documents shine.",
    items: [
      "One-on-one sessions for Statement of Purpose (SOP) crafting.",
      "Professional CV and resume building assistance.",
      "Guidance on gathering and organizing necessary documents.",
      "Mock interviews to prepare for university admissions.",
      "Continuous feedback to refine application materials.",
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    version: "Visa Preparation",
    date: "2–4 months before departure",
    title: "Visa Success Track",
    description: "97% visa success rate with fully guided preparation.",
    items: [
      "Detailed visa application walkthroughs.",
      "Assistance with financial documentation and affidavits.",
      "Preparation for visa interviews with mock sessions.",
      "Updates on visa policies and requirements.",
      "Support in scheduling and tracking visa appointments.",
    ],
    image:
      "https://media.istockphoto.com/id/1680285819/photo/teamwork-with-business-people-analysis-cost-graph-on-the-desk-in-the-meeting-room-the.jpg?s=612x612&w=0&k=20&c=lzbLWjC26GsHxEd1H-lN-G1cWZYfASVCzspQq952NXM=",
  },
  {
    version: "Country Selection",
    date: "Career Goals & Budget",
    title: "Global Reach",
    description: "Italy, Germany, Canada, Australia, Turkey, UK, and more.",
    items: [
      "Partnerships with universities across multiple countries.",
      "Insights into diverse cultural and academic environments.",
      "Information on post-study work opportunities.",
      "Guidance on country-specific admission processes.",
      "Support in understanding international student life.",
    ],
    image:
      "https://media.istockphoto.com/id/505213590/photo/multiracial-teen-couple-holding-globe-map-stock.jpg?s=612x612&w=0&k=20&c=BTyGurH4GE6eNFdkW3_LiVOxpHncHfigDNLKX4YK48M=",
  },
];

const WhyChooseUs = ({
  title = "Why Choose Prime Zone?",
  description = "We provide end-to-end guidance for students, right from selecting the right course and university to visa preparation, ensuring a smooth and successful study abroad journey.",
  entries = defaultChangelogData,
}: WhyChooseUsProps) => {
  return (
    <section className="py-[10vw] sm:py-[8vw] lg:py-[6vw] xl:py-[4vw] 2xl:py-[3vw]">
      <div className="">
        <div className="mx-auto">
          <h2 className="mb-[3vw] sm:mb-[2vw] lg:mb-[1vw] xl:mb-[0.8vw] 2xl:mb-[0.6vw] text-[6vw] sm:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2vw] font-bold tracking-tight">
            {title}
          </h2>
          <p className="mb-[4vw] sm:mb-[3vw] md:text-[2vw] lg:mb-[1.5vw] xl:mb-[1.2vw] 2xl:mb-[1vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1.25vw] xl:text-[1.1vw] 2xl:text-[0.9vw] text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mx-auto xl:w-[90%] mt-[6vw] sm:mt-[4vw] lg:mt-[4vw] xl:mt-[3vw] 2xl:mt-[2.5vw] space-y-[6vw] sm:space-y-[4vw] lg:space-y-[4vw] xl:space-y-[3vw] 2xl:space-y-[2.5vw]">
          {entries.map((entry, index) =>
            index % 2 === 0 ? (
              <div
                key={index}
                className="relative flex flex-col gap-[3vw] sm:gap-[2vw] lg:gap-[2vw] xl:gap-[3vw] 2xl:gap-[2.5vw] md:flex-row"
              >
                <div className="top-[7vw] sm:top-[5vw] lg:top-[4vw] xl:top-[3vw] 2xl:top-[2.5vw] flex h-min shrink-0 items-center gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] xl:gap-[0.8vw] 2xl:gap-[0.6vw] md:sticky md:w-[35vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw]">
                  <Badge
                    variant="secondary"
                    className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] px-[2vw] sm:px-[1.5vw] lg:px-[0.8vw] xl:px-[0.7vw] 2xl:px-[0.6vw] py-[1vw] sm:py-[0.75vw] lg:py-[0.4vw] xl:py-[0.35vw] 2xl:py-[0.3vw]"
                  >
                    {entry.version}
                  </Badge>
                  <span className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] font-medium text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 lg:grid lg:grid-cols-2 md:gap-[4vw] lg:gap-[2vw]">
                  <div className="flex flex-col justify-center px-[4vw] py-[6vw] sm:px-[3vw] sm:py-[4vw] lg:px-[2.5vw] lg:py-[3vw]">
                    <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.8vw] xl:mb-[0.7vw] 2xl:mb-[0.6vw] text-[4vw] sm:text-[3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.1vw] leading-tight font-bold text-foreground/90">
                      {entry.title}
                    </h2>
                    <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] text-muted-foreground">
                      {entry.description}
                    </p>
                    {entry.items && entry.items.length > 0 && (
                      <ul className="mt-[3vw] sm:mt-[2vw]  lg:mt-[1vw] xl:mt-[0.8vw] 2xl:mt-[0.6vw] ml-[3vw] sm:ml-[2vw] lg:ml-[1vw] xl:ml-[0.8vw] 2xl:ml-[0.6vw] space-y-[1.5vw] sm:space-y-[1vw] lg:space-y-[0.4vw] xl:space-y-[0.35vw] 2xl:space-y-[0.3vw] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] text-muted-foreground">
                        {entry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="md:min-h-[16vw] lg:min-h-[20vw] xl:min-h-[24vw]">
                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={`${entry.version} visual`}
                        className="aspect-[16/9] h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="relative flex flex-col gap-[3vw] sm:gap-[2vw] lg:gap-[4vw] xl:gap-[3vw] 2xl:gap-[2.5vw] md:flex-row"
              >
                <div className="top-[7vw] sm:top-[5vw] lg:top-[4vw] xl:top-[3vw] 2xl:top-[2.5vw] flex h-min shrink-0 items-center gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] xl:gap-[0.8vw] 2xl:gap-[0.6vw] md:sticky md:w-[35vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw]">
                  <Badge
                    variant="secondary"
                    className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] px-[2vw] sm:px-[1.5vw] lg:px-[0.8vw] xl:px-[0.7vw] 2xl:px-[0.6vw] py-[1vw] sm:py-[0.75vw] lg:py-[0.4vw] xl:py-[0.35vw] 2xl:py-[0.3vw]"
                  >
                    {entry.version}
                  </Badge>
                  <span className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] font-medium text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 lg:grid lg:grid-cols-2 md:gap-[4vw] lg:gap-[2vw]">
                  <div className="md:min-h-[16vw] lg:min-h-[20vw] xl:min-h-[24vw]">
                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={`${entry.version} visual`}
                        className="aspect-[16/9] h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-center px-[4vw] py-[6vw] sm:px-[3vw] sm:py-[4vw] lg:px-[2.5vw] lg:py-[3vw]">
                    <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.8vw] xl:mb-[0.7vw] 2xl:mb-[0.6vw] text-[4vw] sm:text-[3vw] lg:text-[1.5vw] xl:text-[1.3vw] 2xl:text-[1.1vw] leading-tight font-bold text-foreground/90">
                      {entry.title}
                    </h2>
                    <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] text-muted-foreground">
                      {entry.description}
                    </p>
                    {entry.items && entry.items.length > 0 && (
                      <ul className="mt-[3vw] sm:mt-[2vw] lg:mt-[1vw] xl:mt-[0.8vw] 2xl:mt-[0.6vw] ml-[3vw] sm:ml-[2vw] lg:ml-[1vw] xl:ml-[0.8vw] 2xl:ml-[0.6vw] space-y-[1.5vw] sm:space-y-[1vw] lg:space-y-[0.4vw] xl:space-y-[0.35vw] 2xl:space-y-[0.3vw] text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.8vw] text-muted-foreground">
                        {entry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export { WhyChooseUs };
