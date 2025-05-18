import { ArrowRight, Check } from "lucide-react";

import { Button } from "~/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
          <div className="md:w-1/2">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              Call to Action
            </h4>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto illo praesentium nisi, accusantium quae.
            </p>
            <Button className="mt-6">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <ul className="flex w-full flex-col space-y-2 text-sm font-medium sm:text-base">
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Lorem ipsum dolor sit.
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-4 flex-shrink-0" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
