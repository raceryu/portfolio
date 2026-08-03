import Image from "next/image";
import Doodles from "./Doodles";
import MiniPlayer from "./MiniPlayer";

export default function Hero() {
  return (
    <section className="hero scrapbook-page" id="home" aria-labelledby="hero-title">
      <div className="tape tape--blue hero-tape" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">INTRO.EXE // PORTFOLIO_OS</p>
        <h1 className="hero-name-only" id="hero-title">
          <span>Rachel Yu</span>
        </h1>
        <div className="hero-description" id="about">
          <div className="tape tape--description" aria-hidden="true" />
          <p className="hero-description-label">C:\PROFILE\about_me.txt</p>
          <p className="hero-tagline">
            {/* REPLACE: your about introduction */}
            I&apos;m a Mechanical Engineering major at UIUC, and I love to turn spontaneous ideas
            into physical products.
          </p>
          <p>
            {/* REPLACE: your longer description */}
            When I create, I focus on the details that make products a remarkable
            experience for their users. I enjoy mixing different flavors
            of making, using my background in machining, programming, painting, and messing around
            in my garage, to create the best final product possible.
          </p>
          <p className="hero-description-signoff">STATUS: working on something cool ♡</p>
        </div>
        <div className="hero-actions">
          <a className="sticker-button" href="#projects">
            SEE PROJECTS <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#contact">
            send message <span aria-hidden="true">♡</span>
          </a>
        </div>
        <Doodles variant="swirl" className="hero-swirl" />
      </div>

      <div className="hero-photo-wrap">
        <Doodles className="hero-stars" />
        <div className="error-popup" aria-hidden="true">
          <span>System Message</span>
          <p>welcome to my page :)</p>
          <b>OK</b>
        </div>
        <figure className="polaroid polaroid--hero">
          <div className="profile-placeholder">
            <Image
              className="profile-photo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/projects/pfp.png`}
              alt="Illustrated portrait of Rachel Yu"
              fill
              priority
              sizes="(max-width: 699px) 70vw, 340px"
            />
          </div>
          <figcaption>webcam_01.jpg · 640×480 · LIVE</figcaption>
        </figure>
        <div className="stamp stamp--round">MADE WITH<br />CARE</div>
        <MiniPlayer />
      </div>

      <div className="scroll-note" aria-hidden="true">
        <span>scroll for more...</span>
        ↓
      </div>
    </section>
  );
}
