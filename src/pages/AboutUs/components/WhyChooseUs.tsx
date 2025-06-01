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

const WhyChooseUs = ({
  title = "Why Choose Prime Zone?",
  description = "We provide end-to-end guidance for students, right from selecting the right course and university to visa preparation, ensuring a smooth and successful study abroad journey.",
  entries = defaultChangelogData,
}: WhyChooseUsProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-28 flex h-min shrink-0 items-center gap-4 md:sticky">
                <Badge variant="secondary" className="text-xs">
                  {entry.version}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <div>
                <h2 className="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={`${entry.version} visual`}
                    className="mt-8 w-full rounded-lg object-cover"
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

export { WhyChooseUs };

export const defaultChangelogData: ChangelogEntry[] = [
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
