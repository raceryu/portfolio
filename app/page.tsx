import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrapbookNav from "./components/ScrapbookNav";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <ScrapbookNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
