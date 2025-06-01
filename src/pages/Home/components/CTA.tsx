import { ArrowRight, Check } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useOpenConsultantModal } from "~/hooks/use-consultant";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
        <div className="md:w-1/2">
          <h4
            style={{ lineHeight: 1.25 }}
            className="mb-1 text-2xl font-bold md:text-3xl"
          >
            Ready to Start Your Global Education Journey?
          </h4>
          {/* <p className="text-muted-foreground">
            Join thousands of students who have successfully achieved their
            study abroad dreams with Prime Zone’s expert guidance.
          </p> */}
          <Button className="mt-6" onClick={useOpenConsultantModal()}>
            Get Started <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="md:w-1/2">
          <ul className="flex w-full flex-col space-y-2 text-sm font-medium sm:text-base">
            <li className="flex items-center">
              <Check className="mr-4 size-4 flex-shrink-0" />
              Personalized course and university matching
            </li>
            <li className="flex items-center">
              <Check className="mr-4 size-4 flex-shrink-0" />
              Expert application and visa support
            </li>
            <li className="flex items-center">
              <Check className="mr-4 size-4 flex-shrink-0" />
              Continuous support from application to arrival
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { CTA };
