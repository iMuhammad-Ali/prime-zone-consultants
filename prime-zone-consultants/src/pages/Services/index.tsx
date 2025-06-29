import { ArrowRight } from "lucide-react";
import { useOpenConsultantModal } from "~/hooks/use-consultant";

const Services = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-md">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Services we offer
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Comprehensive support throughout your study abroad journey, from
            course and university selection to application assistance, visa
            guidance, and post-arrival support.
          </p>
          <div
            onClick={useOpenConsultantModal()}
            className="cursor-pointer group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Consult with us{" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="University Selection"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Personalized University and Course Selection
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                We analyze your academic background, interests, and career goals
                to recommend the best universities and courses worldwide. Our
                experts stay updated with global education trends to help you
                find programs that fit your ambitions and budget perfectly.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Visa Application and Documentation Support
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Navigating visa processes can be complex, but we simplify it for
                you. From preparing your Statement of Purpose and CV to
                organizing all necessary documents, our visa specialists guide
                you step-by-step to maximize your chances of approval and reduce
                delays.
              </p>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
                alt="Visa support"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.jpg?s=612x612&w=0&k=20&c=z6ITYmSyNg2Tje2ZzaOk3o_aAsKT-hfz9JHSwGHW3J8="
                alt="Pre-departure and Post-arrival Support"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Pre-departure and Post-arrival Support
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                We provide comprehensive support before and after you travel
                abroad. This includes guidance on accommodation, travel
                arrangements, cultural orientation, and continuous assistance to
                ensure a smooth transition and successful experience in your new
                country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
