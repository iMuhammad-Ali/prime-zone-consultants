import { ArrowRight, Check } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useOpenConsultantModal } from "~/hooks/use-consultant";

const CTA = () => {
  return (
    <section className="py-[6vw] sm:py-[4vw] lg:py-[3vw]">
      <div className="flex flex-col items-center justify-between gap-[4vw] sm:gap-[3vw] lg:gap-[2vw] rounded-[1vw] bg-muted px-[4vw] py-[6vw] sm:px-[3vw] sm:py-[4vw] md:flex-row lg:px-[5vw] lg:py-[4vw]">
        <div className="md:w-1/2">
          <h4
            style={{ lineHeight: 1.25 }}
            className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] text-[5vw] sm:text-[4vw] lg:text-[2vw] font-bold"
          >
            Ready to Start Your Global Education Journey?
          </h4>
          {/* <p className="text-muted-foreground">
            Join thousands of students who have successfully achieved their
            study abroad dreams with Prime Zone’s expert guidance.
          </p> */}
          <Button
            className="mt-[4vw] sm:mt-[3vw] lg:mt-[1.5vw] h-[10vw] sm:h-[6vw] lg:h-[3vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw]"
            onClick={useOpenConsultantModal()}
          >
            Get Started{" "}
            <ArrowRight className="ml-[1vw] sm:ml-[0.75vw] lg:ml-[0.5vw] w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw]" />
          </Button>
        </div>
        <div className="md:w-1/2">
          <ul className="flex w-full flex-col space-y-[3vw] sm:space-y-[2vw] lg:space-y-[1vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] font-medium">
            <li className="flex items-center">
              <Check className="mr-[3vw] sm:mr-[2vw] lg:mr-[1vw] w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw] flex-shrink-0" />
              Personalized course and university matching
            </li>
            <li className="flex items-center">
              <Check className="mr-[3vw] sm:mr-[2vw] lg:mr-[1vw] w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw] flex-shrink-0" />
              Expert application and visa support
            </li>
            <li className="flex items-center">
              <Check className="mr-[3vw] sm:mr-[2vw] lg:mr-[1vw] w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw] flex-shrink-0" />
              Continuous support from application to arrival
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { CTA };
