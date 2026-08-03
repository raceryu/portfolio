import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrapbookNav from "./components/ScrapbookNav";

export default function Home() {
  return (
    <main className="home-page" id="top">
      <ScrapbookNav />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
