import AutoLoopSlider from "~/components/Framer/AutoLoopSlider";

function AutoLoop() {
  return (
    <div className="sticky top-0 z-[100]">
      <AutoLoopSlider>
        <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
          <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">
            🇮🇹
          </span>
          <span>Italy 2026 Intake Admissions Opening Soon – Stay Tuned!</span>
        </span>
        <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
          <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">
            📢
          </span>
          <span>
            {" "}
            France Study Visa 2025 Applications Now Accepted – Apply Today!
          </span>
        </span>
        <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
          <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">
            🎓
          </span>
          <span>
            Scholarships Available for Europe – Limited Seats, Don’t Miss Out!
          </span>
        </span>
        <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
          <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">
            ✈️
          </span>
          <span>
            {" "}
            IELTS/PTE Not Required for Many Countries – Contact Us to Know More!
          </span>
        </span>
        <span className="flex items-center gap-[1vw] sm:gap-[0.8vw] lg:gap-[0.5vw]">
          <span className="text-[2.5vw] sm:text-[1.8vw] lg:text-[1vw] xl:text-[0.9vw] 2xl:text-[0.7vw]">
            📄
          </span>
          <span>
            Free Profile Assessment for Study Abroad – Book Your Slot Now!
          </span>
        </span>
      </AutoLoopSlider>
    </div>
  );
}

export default AutoLoop;
