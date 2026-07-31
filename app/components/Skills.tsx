const skills = [
  { name: "React", mark: "⚛", tone: "blue" },
  { name: "TypeScript", mark: "TS", tone: "cream" },
  { name: "UI / UX", mark: "✎", tone: "pink" },
  { name: "CSS", mark: "✦", tone: "navy" },
  { name: "Figma", mark: "F", tone: "cream" },
  { name: "Git", mark: "⌁", tone: "pink" },
  { name: "Research", mark: "◎", tone: "blue" },
  { name: "Add yours", mark: "+", tone: "outline" },
];

export default function Skills() {
  return (
    <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="skills-intro">
        <p className="section-kicker">the toolkit</p>
        <h2 id="skills-title">my sticker sheet</h2>
        <p>
          {/* REPLACE: skills intro */}
          A growing collection of tools, practices, and things I love working
          with.
        </p>
      </div>
      <ul className="sticker-sheet">
        {skills.map((skill, index) => (
          <li
            className={`skill-sticker skill-sticker--${skill.tone}`}
            key={skill.name}
            style={{ "--sticker-index": index } as React.CSSProperties}
          >
            <span aria-hidden="true">{skill.mark}</span>
            <strong>{skill.name}</strong>
          </li>
        ))}
      </ul>
      <div className="skill-washi" aria-hidden="true">
        keep learning · keep making · keep wondering
      </div>
    </section>
  );
}
