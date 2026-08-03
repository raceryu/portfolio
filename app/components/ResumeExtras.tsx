import { awards, skillGroups } from "../data/experience";

export default function ResumeExtras() {
  return (
    <section
      className="resume-extras section-wrap"
      aria-labelledby="resume-extras-title"
    >
      <header className="resume-extras-heading">
        {/* <p className="section-kicker">C:\PORTFOLIO\ADDITIONAL_INFO</p>
        <h2 id="resume-extras-title">more_from_resume.dat</h2> */}
        {/* <p>Awards, tools, and practical skills collected in one place.</p> */}
      </header>

      <div className="resume-extras-grid">
        <section className="resume-panel resume-awards" aria-labelledby="awards-title">
          <div className="resume-panel-titlebar" aria-hidden="true">
            awards.log <span>_ □ ×</span>
          </div>
          <h3 id="awards-title">AWARDS + RECOGNITION</h3>
          <div className="awards-list">
            {awards.map((award) => (
              <article className="award-item" key={`${award.year}-${award.title}`}>
                <p className="award-year">
                  {award.year.split(/\s+/).map((year) => (
                    <span key={year}>{year}</span>
                  ))}
                </p>
                <h4>{award.title}</h4>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-panel resume-skills" aria-labelledby="skills-title">
          <div className="resume-panel-titlebar" aria-hidden="true">
            skills.ini <span>_ □ ×</span>
          </div>
          <h3 id="skills-title">SKILLS + TOOLKIT</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.category}>
                <h4>{group.category}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
