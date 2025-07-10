const AboutUsFeatures = () => {
  return (
    <section className="py-[6vw] sm:py-[5vw] lg:py-[4vw] xl:py-[3vw] 2xl:py-[2.5vw] dark bg-background text-foreground px-[4vw] sm:px-[3vw] lg:px-[2vw] xl:px-[8vw] 2xl:px-[12vw]">
      <div>
        <div className="grid gap-[2vw] sm:gap-[1.5vw] lg:gap-[1.2vw] xl:gap-[1vw] 2xl:gap-[0.8vw] lg:grid-cols-3">
          <h2 className="row-span-2 text-[6vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] 2xl:text-[2.8vw] font-semibold">
            Our Principles & Core Values
          </h2>

          <div>
            <h3 className="mb-[0.5vw] sm:mb-[0.4vw] lg:mb-[0.3vw] xl:mb-[0.25vw] 2xl:mb-[0.2vw] text-[4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[2.25vw] 2xl:text-[2vw] font-medium">
              Team Spirit
            </h3>
            <p className="text-foreground/75 text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
              We work together with students and families as one team,
              collaborating to build a successful future abroad through shared
              knowledge and mutual trust.
            </p>
          </div>

          <div>
            <h3 className="mb-[0.5vw] sm:mb-[0.4vw] lg:mb-[0.3vw] xl:mb-[0.25vw] 2xl:mb-[0.2vw] text-[4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[2.25vw] 2xl:text-[2vw] font-medium">
              Innovation
            </h3>
            <p className="text-foreground/75 text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
              We embrace modern tools, global education trends, and data-driven
              counseling to provide the most relevant guidance for your academic
              journey.
            </p>
          </div>

          <div>
            <h3 className="mb-[0.5vw] sm:mb-[0.4vw] lg:mb-[0.3vw] xl:mb-[0.25vw] 2xl:mb-[0.2vw] text-[4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[2.25vw] 2xl:text-[2vw] font-medium">
              Quality
            </h3>
            <p className="text-foreground/75 text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
              Every recommendation, document, and interaction reflects our
              commitment to excellence, ensuring you receive only the best
              support throughout your application.
            </p>
          </div>

          <div>
            <h3 className="mb-[0.5vw] sm:mb-[0.4vw] lg:mb-[0.3vw] xl:mb-[0.25vw] 2xl:mb-[0.2vw] text-[4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[2.25vw] 2xl:text-[2vw] font-medium">
              Integrity
            </h3>
            <p className="text-foreground/75 text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
              We offer honest advice and transparent communication, prioritizing
              what’s truly best for your goals, not what’s easy or popular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsFeatures };
