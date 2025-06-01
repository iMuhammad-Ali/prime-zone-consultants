import { Button } from "~/components/ui/button";
import { useAppDispatch } from "~/hooks/redux";
import { openConsultantModal } from "~/store/consultant/consultantSlice";

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
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Your Study Abroad Journey Starts Here",
    description:
      "We empower students with the right guidance, tools, and support to choose the best university, course, and country, ensuring a smooth path to global education.",
    buttonText: "Get Started",
  },
}: About3Props = {}) => {
  const dispatch = useAppDispatch();

  return (
    <section className="pt-36 pb-16">
      <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
        <h2 className="text-5xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-7 lg:grid-cols-3">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className="w-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
        />
        <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
          <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
            <img
              src={breakout.src}
              alt={breakout.alt}
              className="mr-auto h-12"
            />
            <div>
              <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
              <p className="text-muted-foreground">{breakout.description}</p>
            </div>
            <Button
              variant="outline"
              className="mr-auto"
              onClick={() => dispatch(openConsultantModal())}
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
