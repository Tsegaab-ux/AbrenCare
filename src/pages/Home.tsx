import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Service";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}