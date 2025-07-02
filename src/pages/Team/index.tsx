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
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Our experienced and passionate team of education consultants, visa
          experts, and student advisors is dedicated to helping you make the
          right choices for your academic and career goals abroad.
        </p>
      </div>
      <div className="container mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {people.map((person) => (
          <Card
            key={person.id}
            className="flex flex-col items-start overflow-hidden"
          >
            <CardHeader className="bg-gray-200 w-full">
              <Avatar className="mb-4 size-20 md:mb-5 lg:size-24 object-cover mx-auto">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <div className="p-4">
              <p className="font-medium">{person.name}</p>
              <p className="text-muted-foreground">{person.role}</p>
              <p className="py-3 text-sm text-muted-foreground">
                {person.description}
              </p>
              <div className="mt-2 flex gap-4">
                <a href="#">
                  <Github className="size-5 text-muted-foreground" />
                </a>
                <a href="#">
                  <Linkedin className="size-5 text-muted-foreground" />
                </a>
                <a href="#">
                  <Dribbble className="size-5 text-muted-foreground" />
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
