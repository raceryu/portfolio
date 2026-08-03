import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../components/Contact";
import ProjectSticker from "../components/ProjectSticker";
import ScrapbookNav from "../components/ScrapbookNav";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects — Rachel Yu",
  description: "Selected projects and creative work.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page" id="top">
      <ScrapbookNav />
      <header className="projects-page-header">
        <p className="section-kicker">C:\PORTFOLIO\PROJECT_ARCHIVE</p>
        <h1>project archive</h1>
        {/* <p>
          Experiments, collaborations, launches, and favorite things I&apos;ve
          made along the way.
        </p> */}
        <Link href="/#projects">← back to the main page</Link>
      </header>

      <section
        className="projects projects--archive section-wrap"
        aria-label="All projects"
      >
        <div className="project-sticker-list project-sticker-list--archive">
          {projects.map((project, index) => (
            <ProjectSticker
              project={project}
              index={index}
              key={project.id}
              showDetails
            />
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
