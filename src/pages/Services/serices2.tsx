import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Feature72 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "https://www.shadcnblocks.com",
  linkText = "Book a demo",
  features = [
    {
      id: "feature-1",
      title: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    },
    {
      id: "feature-3",
      title: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    },
    {
      id: "feature-4",
      title: "Advanced Analytics",
      description:
        "Powerful analytics tools to help you understand your users and make data-driven decisions.",
      image: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-[10vw] sm:py-[8vw] lg:py-[6vw]">
      <div className="container flex flex-col gap-[6vw] sm:gap-[4vw] lg:gap-[4vw] px-[4vw] sm:px-[3vw] lg:px-[4vw]">
        <div className="lg:max-w-sm">
          <h2 className="mb-[3vw] sm:mb-[2vw] lg:mb-[1.5vw] text-[5vw] sm:text-[4vw] lg:text-[2.5vw] font-semibold">
            {heading}
          </h2>
          <p className="mb-[6vw] sm:mb-[4vw] lg:mb-[2vw] text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1.25vw]">
            {description}
          </p>
          <a
            href={linkUrl}
            className="group flex items-center text-[3vw] sm:text-[2.5vw] lg:text-[1.25vw] font-medium"
          >
            {linkText}
            <ArrowRight className="ml-[1vw] sm:ml-[0.75vw] lg:ml-[0.5vw] w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-[4vw] sm:gap-[3vw] lg:gap-[2vw] md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-border"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-[4vw] py-[6vw] sm:px-[3vw] sm:py-[4vw] lg:px-[2.5vw] lg:py-[3vw]">
                <h3 className="mb-[3vw] sm:mb-[2vw] lg:mb-[1.5vw] text-[4vw] sm:text-[3vw] lg:text-[1.5vw] font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1.25vw]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature72 };
