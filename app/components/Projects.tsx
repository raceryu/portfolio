import Link from "next/link";
import ProjectSticker from "./ProjectSticker";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      className="projects section-wrap"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-heading">
        <p className="section-kicker">DIRECTORY /WORK/SELECTED · 2022—PRESENT</p>
        <h2 id="projects-title">projects</h2>
        {/* <p>Three files from the archive. Double-click to look around.</p> */}
      </div>

      <div className="project-sticker-list">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectSticker project={project} index={index} key={project.id} />
        ))}
      </div>

      <div className="projects-more">
        <span aria-hidden="true">✦ · · ·</span>
        <Link href="/projects">
          [ OPEN FULL DIRECTORY ] <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
