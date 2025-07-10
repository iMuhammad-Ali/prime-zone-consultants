import { List } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card } from "~/components/ui/card";
import Overview from "./Overview";

const Features = ({ university }: any) => {
  const features = [
    {
      id: "feature-1",
      title: "Overview",
      icon: <List className="w-full h-full" />,
      content: <Overview university={university} />,
    },
  ];

  return (
    <Tabs defaultValue={features[0].id}>
      <TabsList className="px-0 flex justify-start h-auto gap-[3vw] sm:gap-[2vw] md:gap-[1.5vw] lg:gap-[1vw] bg-background flex-wrap mb-[4vw] sm:mb-[3vw] md:mb-[2vw] lg:mb-[1vw]">
        {features.map((feature) => (
          <TabsTrigger
            key={feature.id}
            value={feature.id}
            className="min-w-[40vw] sm:min-w-[30vw] md:min-w-[20vw] lg:min-w-[12vw] flex flex-col items-start justify-start gap-[1vw] sm:gap-[0.75vw] md:gap-[0.5vw] lg:gap-[0.25vw] rounded-md border-2 p-[3vw] sm:p-[2.5vw] md:p-[2vw] lg:p-[1vw] text-left whitespace-normal text-primary hover:border-primary/40 hover:opacity-100 opacity-75 data-[state=active]:opacity-100  data-[state=active]:scale-[105%] data-[state=active]:shadow-2xl data-[state=active]:border-secondary data-[state=active]:bg-secondary"
          >
            <div className="flex w-full items-center flex-col gap-[2vw] sm:gap-[1.5vw] md:gap-[1vw] lg:gap-[0.5vw]">
              <span className="flex w-[8vw] h-[8vw] sm:w-[6vw] sm:h-[6vw] md:w-[4vw] md:h-[4vw] lg:w-[3vw] lg:h-[3vw] items-center justify-center rounded-full">
                {feature.icon}
              </span>
              <p className="text-base sm:text-lg md:text-xl lg:text-lg font-semibold text-center">
                {feature.title}
              </p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {features.map((feature) => (
        <TabsContent key={feature.id} value={feature.id}>
          <Card className="w-full rounded p-[4vw] sm:p-[3vw] md:p-[2vw] lg:p-[1.25vw] space-y-[3vw] sm:space-y-[2.5vw] md:space-y-[2vw] lg:space-y-[1.25vw]">
            {feature.content}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Features;
