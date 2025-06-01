const AboutUsFeatures = () => {
  return (
    <section className="py-24 dark bg-background text-foreground">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            Our Principles & Core Values
          </h2>

          <div>
            <h3 className="mb-2 text-xl font-medium">Team Spirit</h3>
            <p className="text-foreground/75">
              We work together with students and families as one team,
              collaborating to build a successful future abroad through shared
              knowledge and mutual trust.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="text-foreground/75">
              We embrace modern tools, global education trends, and data-driven
              counseling to provide the most relevant guidance for your academic
              journey.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="text-foreground/75">
              Every recommendation, document, and interaction reflects our
              commitment to excellence, ensuring you receive only the best
              support throughout your application.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">Integrity</h3>
            <p className="text-foreground/75">
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
