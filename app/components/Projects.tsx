const projects = [
  {
    number: "01",
    title: "Project One",
    description:
      "A short, clear description of what you made, who it helped, and why it mattered.",
    tags: ["React", "Design", "CSS"],
    className: "project-card--one",
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "Share the problem you solved and the part of the process you’re especially proud of.",
    tags: ["TypeScript", "API", "UX"],
    className: "project-card--two",
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "Add one memorable outcome or detail that makes someone want to learn more.",
    tags: ["Research", "Web", "Brand"],
    className: "project-card--three",
  },
];

export default function Projects() {
  return (
    <section
      className="projects scrapbook-page"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-heading">
        <p className="section-kicker">selected works · 20XX—now</p>
        <h2 id="projects-title">things I&apos;ve made</h2>
        <p>A small collection of ideas brought to life.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article
            className={`project-card ${project.className}`}
            key={project.number}
          >
            <div className="tape tape--short" aria-hidden="true" />
            <div className="project-number" aria-hidden="true">
              {project.number}
            </div>
            <div
              className="project-image-placeholder"
              role="img"
              aria-label={`Placeholder image for ${project.title}`}
            >
              {/* REPLACE: project image */}
              <div className="project-window">
                <span />
                <span />
                <span />
              </div>
              <p>project preview</p>
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="Technology tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href="#contact" aria-label={`Ask about ${project.title}`}>
                view the story <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer-note" aria-hidden="true">
        ✦ made with equal parts logic + daydreams ✦
      </div>
    </section>
  );
}
