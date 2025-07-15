// import { Blog } from "./components/Blogs";
import { CTA } from "./components/CTA";
import { Faqs } from "./components/Faqs";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import Testimonials from "./components/Testimonials";
import { Universities } from "./components/Universities";
import ScholarShips from "./components/ScholarShips";

const Home = () => {
  return (
    <>
      <Hero />
      <Universities />
      <Stats />
      <Features />
      <ScholarShips />
      <Faqs />
      {/* <Blog /> */}
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
