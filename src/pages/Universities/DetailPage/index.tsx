import { Button } from "~/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import universitiesData from "~/data/universities.json";
import { useOpenConsultantModal } from "~/hooks/use-consultant";
import Features from "./Features";

const UniversityDetailPage = () => {
  const navigate = useNavigate();
  const openConsultantModal = useOpenConsultantModal();

  const { id } = useParams<{ id: string }>();

  const [university, setUniversity] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const found = universitiesData.find((uni) => uni.id === id);
      if (found) {
        setUniversity(found);
      } else {
        navigate("/universities");
      }
    }
  }, [id]);

  if (!university) return null;

  return (
    <section className="pt-20 pb-20 sm:pt-[8vw] sm:pb-[5vw]">
      <div className="flex flex-col items-center text-center mb-[2vw]">
        <div
          className="relative w-full h-[60vw] sm:h-[35vw] rounded-md overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${university.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-1" />
          <div className="space-y-[0.75vw] sm:space-y-[1.5vw] z-10 px-[0.5vw]">
            <h2
              className="text-3xl sm:text-5xl 2xl:text-[2.5vw] font-bold"
              style={{ textShadow: "0.15vw 0.15vw 0.3vw rgba(0, 0, 0, 0.6)" }}
            >
              {university.name}
            </h2>
            <h2
              className="text-xl sm:text-2xl font-semibold"
              style={{ textShadow: "0.15vw 0.15vw 0.3vw rgba(0, 0, 0, 0.3)" }}
            >
              {university.location}
            </h2>
            <Button
              onClick={openConsultantModal}
              className="w-auto sm:max-w-[20vw] py-[1.5vw] text-lg bg-background text-foreground hover:bg-background hover:scale-[102%] transition-all duration-300 shadow-md"
            >
              Apply to University
            </Button>
          </div>
        </div>
      </div>
      <Features university={university} />
    </section>
  );
};

export default UniversityDetailPage;
