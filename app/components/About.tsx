import Doodles from "./Doodles";

export default function About() {
  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-title">
      <div className="section-kicker">entry no. 01</div>
      <div className="about-collage">
        <div className="about-title-card">
          <div className="tape tape--plaid" aria-hidden="true" />
          <p>dear journal,</p>
          <h2 id="about-title">a little about me</h2>
          <Doodles variant="hearts" />
        </div>

        <article className="journal-paper">
          <p className="journal-date">THURSDAY · JULY 20XX</p>
          <p className="drop-cap">
            {/* REPLACE: your about introduction */}
            Hello! I&apos;m a multidisciplinary creative who enjoys turning
            fuzzy ideas into warm, useful experiences. I care about the small
            details—the ones that make a product feel intuitive, human, and
            quietly delightful.
          </p>
          <p>
            {/* REPLACE: more about your background and interests */}
            When I&apos;m not designing or writing code, you&apos;ll probably
            find me collecting tiny inspirations, making overly specific
            playlists, or wandering somewhere with a camera.
          </p>
          <p className="journal-signoff">with love, Your Name ♡</p>
          <div className="underline-scribble" aria-hidden="true" />
        </article>

        <aside className="about-bits" aria-label="A few quick facts">
          <div className="stamp stamp--postal">CREATIVE<br />POST</div>
          <div className="sticky-note">
            <span>currently...</span>
            learning, tinkering,<br />
            &amp; chasing good ideas
          </div>
          <div className="tiny-photo">
            <div className="tiny-photo-art" aria-hidden="true">
              <span>☁</span>
              <i />
            </div>
            <p>somewhere lovely</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
