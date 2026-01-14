import Image from "next/image";
import Header from "@/Sections/Header";
import Projects from "@/Sections/Projects";
import Skills from "@/Sections/Skills";
import About from "@/Sections/About";
import Hero from "@/Sections/Hero";
import Footer from "@/Sections/Footer";
import Contact from "@/Sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
