import Doodles from "./Doodles";

export default function Hero() {
  return (
    <section className="hero scrapbook-page" id="home" aria-labelledby="hero-title">
      <div className="tape tape--blue hero-tape" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">portfolio · volume one</p>
        <p className="hero-date">dreaming &amp; making since 20XX</p>
        <h1 id="hero-title">
          Hi, I&apos;m
          <span>Your Name</span>
        </h1>
        <p className="hero-tagline">
          {/* REPLACE: your short tagline */}
          I design thoughtful digital things with curiosity, care, and a little
          bit of magic.
        </p>
        <div className="hero-actions">
          <a className="sticker-button" href="#projects">
            open my scrapbook <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#contact">
            say hello <span aria-hidden="true">♡</span>
          </a>
        </div>
        <Doodles variant="swirl" className="hero-swirl" />
      </div>

      <div className="hero-photo-wrap">
        <Doodles className="hero-stars" />
        <figure className="polaroid polaroid--hero">
          <div
            className="profile-placeholder"
            role="img"
            aria-label="Placeholder for your profile photo"
          >
            {/* REPLACE: profile photo */}
            <div className="portrait-sun" />
            <div className="portrait-head" />
            <div className="portrait-body" />
            <span>your photo here</span>
          </div>
          <figcaption>currently making things I care about ✿</figcaption>
        </figure>
        <div className="mini-note">
          <span>note to self:</span>
          make it meaningful.
        </div>
        <div className="stamp stamp--round">made with care<br />✦ 20XX ✦</div>
      </div>

      <div className="scroll-note" aria-hidden="true">
        <span>scroll to explore</span>
        ↓
      </div>
    </section>
  );
}
