import type { ExperienceItem } from "../data/experience";

type ExperienceEntryProps = {
  experience: ExperienceItem;
};

export default function ExperienceEntry({
  experience,
}: ExperienceEntryProps) {
  return (
    <article className="experience-entry" id={experience.id}>
      <span className="experience-dot" aria-hidden="true" />
      <div className="tape tape--experience" aria-hidden="true" />
      <header className="experience-company-header">
        <div>
          <p>ORGANIZATION</p>
          <h3>{experience.company}</h3>
        </div>
        <p className="experience-location">{experience.location}</p>
      </header>

      <div className="experience-role-list">
        {experience.roles.map((role) => (
          <section className="experience-role" key={`${role.dates}-${role.title}`}>
            <header className="experience-role-header">
              <p className="experience-date">{role.dates}</p>
              <h4>{role.title}</h4>
            </header>
            <div className="experience-entry-body experience-entry-body--bullets">
              <ul>
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <ul className="experience-tags" aria-label={`${role.title} themes`}>
              {role.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
