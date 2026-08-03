import Link from "next/link";
import ExperienceEntry from "./ExperienceEntry";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      className="experience section-wrap"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-intro">
        <p className="section-kicker">/USR/LOCAL/HISTORY.LOG</p>
        <h2 id="experience-title">experience</h2>
        {/* <p>
          A few chapters from my professional story—what I worked on, what
          changed, and what I carried forward.
        </p> */}
      </div>

      <div className="experience-journal">
        {experiences.slice(0, 2).map((experience) => (
          <ExperienceEntry experience={experience} key={experience.id} />
        ))}
      </div>

      <div className="experience-more">
        <span aria-hidden="true">♡ · · ·</span>
        <Link href="/experience">
          [ LOAD FULL LOG ] <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
