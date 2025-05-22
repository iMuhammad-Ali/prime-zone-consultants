import { Blog } from "./components/Blogs";
import { Courses } from "./components/Courses";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Universities } from "./components/Universities";

const Home = () => {
  return (
    <>
      <Hero />
      <Universities />
      <Stats />
      <Features />
      <Courses />
      <Blog />
      <CTA />
    </>
  );
};

export default Home;
