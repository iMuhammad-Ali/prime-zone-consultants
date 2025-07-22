import { Button } from "~/components/ui/button";
import { useOpenConsultantModal } from "~/hooks/use-consultant";
import Logo from "~/assets/images/logo-white.png";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const TopSection = ({
  title = "About Us",
  description = "We are a dedicated education consultancy helping students achieve their dreams of studying abroad by offering personalized guidance on courses, universities, countries, and visa preparation.",
  mainImage = {
    src: "https://media.istockphoto.com/id/2217491650/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=_4MiFndwCkgS3FkioChClpWL37sEW8viAGjy66v4UQI=",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://media.istockphoto.com/id/2205511404/photo/successful-business-interaction-in-a-vibrant-setting.jpg?s=612x612&w=0&k=20&c=GkYIi3fOs8rszmyEwkA5EfyRO-g3sWj2NyHJN7ODweQ=",
    alt: "placeholder",
  },
  breakout = {
    src: Logo,
    alt: "logo",
    title: "Your Study Abroad Journey Starts Here",
    description:
      "We empower students with the right guidance, tools, and support to choose the best university, course, and country, ensuring a smooth path to global education.",
    buttonText: "Get Started",
  },
}: About3Props = {}) => {
  return (
    <section className="pt-[20vw] sm:pt-[10vw] lg:pt-[10vw] xl:pt-[10vw] 2xl:pt-[8vw] pb-[4vw] sm:pb-[3vw] lg:pb-[2vw] xl:pb-[1.5vw] 2xl:pb-[1.2vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] xl:px-[8vw] 2xl:px-[12vw]">
      <div className="mb-[3.5vw] sm:mb-[2.5vw] lg:mb-[2vw] xl:mb-[1.5vw] 2xl:mb-[1.2vw] grid gap-[1.2vw] sm:gap-[1vw] lg:gap-[0.8vw] xl:gap-[0.6vw] 2xl:gap-[0.5vw] text-center md:grid-cols-2 md:text-left">
        <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
          {title}
        </h2>
        <p className="flex items-center text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
          {description}
        </p>
      </div>
      <div className="grid gap-[1.8vw] sm:gap-[1.5vw] lg:gap-[1.2vw] xl:gap-[1vw] 2xl:gap-[0.8vw] lg:grid-cols-3">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className="w-full max-h-[45vw] sm:max-h-auto lg:max-h-auto xl:max-h-auto 2xl:max-h-auto rounded-xl object-cover lg:col-span-2"
        />
        <div className="flex flex-col gap-[1.8vw] sm:gap-[1.5vw] lg:gap-[1.2vw] xl:gap-[1vw] 2xl:gap-[0.8vw] md:flex-row lg:flex-col">
          <div className="bg-muted flex flex-col justify-between gap-[1.5vw] sm:gap-[1.2vw] lg:gap-[1vw] xl:gap-[0.8vw] 2xl:gap-[0.6vw] rounded-xl p-[5vw] sm:p-[1.5vw] lg:p-[1.2vw] xl:p-[1vw] 2xl:p-[0.8vw] md:w-1/2 lg:w-auto">
            <img
              src={breakout.src}
              alt={breakout.alt}
              className="mr-auto h-[6vw] sm:h-[4vw] lg:h-[3vw] xl:h-[2.5vw] 2xl:h-[2vw]"
            />
            <div>
              <p className="mb-[0.5vw] sm:mb-[0.4vw] lg:mb-[0.3vw] xl:mb-[0.25vw] 2xl:mb-[0.2vw] text-[4.5vw] sm:text-[3vw] lg:text-[1.8vw] xl:text-[1.5vw] 2xl:text-[1.2vw] font-semibold">
                {breakout.title}
              </p>
              <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[0.9vw]">
                {breakout.description}
              </p>
            </div>
            <Button
              variant="outline"
              className="mr-auto"
              onClick={useOpenConsultantModal()}
            >
              {breakout.buttonText}
            </Button>
          </div>
          <img
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export { TopSection };
