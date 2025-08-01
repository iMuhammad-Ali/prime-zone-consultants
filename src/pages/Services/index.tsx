import { ArrowRight } from "lucide-react";
import services from "~/assets/images/services.png"
import { useOpenConsultantModal } from "~/hooks/use-consultant";
import { Brain, TicketsPlane, FileText, CircleDollarSign } from "lucide-react";

// Services data array
const servicesData = [
  {
    id: 1,
    title: "Study Abroad & Admission Guidance",
    icon: Brain,
  },
  {
    id: 2,
    title: "Visa & Documentation Support",
    icon: FileText,
  },
  {
    id: 3,
    title: "Scholarship & Financial Aid Assistance",
    icon: CircleDollarSign,
  },
  {
    id: 4,
    title: "Post-Visa & Settlement Services",
    icon: TicketsPlane,
  },
];

const Services = () => {
  return (
    <section className="py-[20vw] sm:py-[15vw] md:py-[15vw] lg:py-[8vw]">
      <div className="flex flex-col gap-[6vw] sm:gap-[5vw] md:gap-[4vw] lg:px-[4vw]">
        <div className="flex flex-col lg:flex-row justify-between gap-[8vw] sm:gap-[3vw] md:gap-[2vw]">
          <div className="lg:max-w-[35vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
          <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
            Services we offer
          </h2>
          <p className="mb-[4vw] sm:mb-[3vw] md:mb-[2.5vw] lg:mb-[2vw] text-muted-foreground lg:text-lg 2xl:text-[1.2vw]">
            Comprehensive support throughout your study abroad journey, from
            course and university selection to application assistance, visa
            guidance, and post-arrival support.
          </p>
          <div
            onClick={useOpenConsultantModal()}
            className="cursor-pointer group flex items-center text-base font-medium md:text-base lg:text-lg"
          >
            Consult with us{" "}
            <ArrowRight className="ml-[2vw] sm:ml-[1.5vw] md:ml-[1vw] lg:ml-[0.5vw] size-[4vw] sm:size-[2.5vw] md:size-[1.5vw] lg:size-[1vw] xl:size-[1.5vw] transition-transform group-hover:translate-x-1" />
          </div>
          </div>
          <div className="flex justify-center w-full sm:max-w-[30vw] md:max-w-[25vw] lg:max-w-[30vw]">
            <img src={services} alt="Services" className=" w-[60%] sm:w-full h-auto" />
          </div>
        </div>

        {/* Modern icon section for consultation services */}
        <div className="px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
          {/* Services Grid */}
          <div className="sm:flex sm:flex-row sm:justify-between grid grid-cols-2 sm:gap-[3vw] md:gap-[2vw] lg:gap-[1.5vw] mb-[4vw] sm:mb-[3vw] md:mb-[2vw]">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col items-center text-center group mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0vw]"
                >
                  <div className="relative w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[12vw] md:h-[12vw] lg:w-[8vw] lg:h-[8vw] xl:w-[6vw] xl:h-[6vw] mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[1vw]">
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-blue-950 rounded-[2.5vw] sm:rounded-[2vw] md:rounded-[1.5vw] lg:rounded-[1vw] shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-[8vw] h-[8vw] sm:w-[6vw] sm:h-[6vw] md:w-[5vw] md:h-[5vw] lg:w-[3vw] lg:h-[3vw] xl:w-[2.5vw] xl:h-[2.5vw] text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-[1vw] sm:mb-[0.75vw] md:mb-[0.5vw] lg:mb-[0.25vw]">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-[3vw] sm:gap-[2.5vw] md:gap-[2vw] lg:gap-[1.5vw] md:grid-cols-2 px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-[2vw] lg:gap-[1.5vw]">
            <div className="md:min-h-[18vw] lg:min-h-[21vw] xl:min-h-[24vw]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="University Selection"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-[4vw] py-[4vw] sm:px-[3vw] sm:py-[3vw] md:px-[2vw] md:py-[2.5vw] lg:px-[2.5vw] lg:py-[3vw]">
              <h3 className="mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0.75vw] text-lg font-semibold md:text-2xl">
                Personalized University and Course Selection
              </h3>
              <p className="text-muted-foreground lg:text-lg 2xl:text-[1.2vw]">
                We analyze your academic background, interests, and career goals
                to recommend the best universities and courses worldwide. Our
                experts stay updated with global education trends to help you
                find programs that fit your ambitions and budget perfectly.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-[2vw] lg:gap-[1.5vw]">
            <div className="flex flex-col justify-center px-[4vw] py-[4vw] sm:px-[3vw] sm:py-[3vw] md:px-[2vw] md:py-[2.5vw] lg:px-[2.5vw] lg:py-[3vw]">
              <h3 className="mb-[2vw] sm:mb-[1.5vw] md:mb-[1vw] lg:mb-[0.75vw] text-lg font-semibold md:text-2xl">
                Visa Application and Documentation Support
              </h3>
              <p className="text-muted-foreground lg:text-lg 2xl:text-[1.2vw]">
                Navigating visa processes can be complex, but we simplify it for
                you. From preparing your Statement of Purpose and CV to
                organizing all necessary documents, our visa specialists guide
                you step-by-step to maximize your chances of approval and reduce
                delays.
              </p>
            </div>
            <div className="md:min-h-[18vw] lg:min-h-[21vw] xl:min-h-[24vw]">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
                alt="Visa support"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-[1.5vw] lg:gap-[2vw]">
            <div className="md:min-h-[18vw] lg:min-h-[21vw] xl:min-h-[24vw]">
              <img
                src="https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.jpg?s=612x612&w=0&k=20&c=z6ITYmSyNg2Tje2ZzaOk3o_aAsKT-hfz9JHSwGHW3J8="
                alt="Pre-departure and Post-arrival Support"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-[4vw] py-[3vw] md:px-[2vw] md:py-[2.5vw] lg:px-[2.5vw] lg:py-[3vw]">
              <h3 className="mb-[0.75vw] text-lg font-semibold md:mb-[1vw] md:text-2xl lg:mb-[1.5vw]">
                Pre-departure and Post-arrival Support
              </h3>
              <p className="text-muted-foreground lg:text-lg 2xl:text-[1.2vw]">
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
