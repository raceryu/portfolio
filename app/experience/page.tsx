import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../components/Contact";
import ExperienceEntry from "../components/ExperienceEntry";
import ResumeExtras from "../components/ResumeExtras";
import ScrapbookNav from "../components/ScrapbookNav";
import { experiences } from "../data/experience";

export const metadata: Metadata = {
  title: "Experience — Rachel Yu",
  description: "Roles, accomplishments, and growth.",
};

export default function ExperiencePage() {
  return (
    <main className="experience-page" id="top">
      <ScrapbookNav />
      <header className="experience-page-header">
        <p className="section-kicker">C:\PORTFOLIO\ALL_EXPERIENCES</p>
        <h1>experience archive</h1>
        {/* <p>
          A longer look at the teams, challenges, lessons, and small victories
          that shaped how I work.
        </p> */}
        <Link href="/#experience">← back to the main page</Link>
      </header>

      <section
        className="experience experience--archive section-wrap"
        aria-label="Full experience timeline"
      >
        <div className="experience-journal experience-journal--archive">
          {experiences.map((experience) => (
            <ExperienceEntry experience={experience} key={experience.id} />
          ))}
        </div>
      </section>

      <ResumeExtras />

      <Contact />
    </main>
  );
}
