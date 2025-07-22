import { Dribbble, Github, Linkedin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardHeader } from "~/components/ui/card";

const people = [
  {
    id: "person-1",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Name",
    role: "Role",
    description: "Elig doloremque mollitia fugiat omnis!",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Name",
    role: "Role",
    description: "Elig doloremque mollitia fugiat omnis!",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Name",
    role: "Role",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
  },
];

const Team = () => {
  return (
    <section className="py-[20vw] lg:py-[12vw] sm:py-[10vw] md:py-[8vw] xl:py-[6vw] px-[4vw] sm:px-[3vw] md:px-[2vw] lg:px-0">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-[2vw] sm:mb-[1.5vw] lg:mb-[0.5vw] xl:mb-[0.4vw] 2xl:mb-[0.3vw] text-[7vw] sm:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw] font-semibold">
          Meet our team
        </h2>
        <p className="mb-[4vw] sm:mb-[3vw] md:mb-[2.5vw] lg:mb-[2vw] max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] text-muted-foreground lg:text-sm">
          Our experienced and passionate team of education consultants, visa
          experts, and student advisors is dedicated to helping you make the
          right choices for your academic and career goals abroad.
        </p>
      </div>
      <div className="mt-[6vw] sm:mt-[5vw] md:mt-[4vw] grid gap-x-[6vw] gap-y-[6vw] sm:gap-x-[4vw] sm:gap-y-[5vw] md:gap-x-[3vw] md:gap-y-[4vw] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <Card
            key={person.id}
            className="flex flex-col items-start overflow-hidden"
          >
            <CardHeader className="bg-gray-200 w-full">
              <Avatar className="mb-[3vw] sm:mb-[2vw] md:mb-[1.5vw] lg:mb-[1vw] size-[15vw] sm:size-[12vw] md:size-[8vw] lg:size-[6vw] xl:size-[5vw] object-cover mx-auto">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <div className="p-[3vw] sm:p-[2.5vw] md:p-[2vw] lg:p-[1vw]">
              <p className="font-medium 2xl:text-md">{person.name}</p>
              <p className="text-muted-foreground 2xl:text-sm">{person.role}</p>
              <p className="py-[2vw] sm:py-[1.5vw] md:py-[1vw] lg:py-[0.75vw] text-sm 2xl:text-base text-muted-foreground">
                {person.description}
              </p>
              <div className="mt-[2vw] sm:mt-[1.5vw] md:mt-[1vw] lg:mt-[0.5vw] flex gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw]">
                <a href="#">
                  <Github className="size-[5vw] sm:size-[3vw] md:size-[2vw] lg:size-[1.25vw] text-muted-foreground" />
                </a>
                <a href="#">
                  <Linkedin className="size-[5vw] sm:size-[3vw] md:size-[2vw] lg:size-[1.25vw] text-muted-foreground" />
                </a>
                <a href="#">
                  <Dribbble className="size-[5vw] sm:size-[3vw] md:size-[2vw] lg:size-[1.25vw] text-muted-foreground" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
