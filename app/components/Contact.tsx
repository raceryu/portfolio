export default function Contact() {
  return (
    <section
      className="contact scrapbook-page"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-heading">
        <p className="section-kicker">INBOX (1) · CONNECTION SECURE</p>
        <h2 id="contact-title">you&apos;ve got mail!</h2>
        {/* <p>
          Have a project, a question, or just want to say hi? My inbox is always
          open.
        </p> */}
      </div>

      <div className="postcard">
        <div className="postcard-message">
          <p className="postcard-date">NEW MESSAGE — SOMEWHERE ON THE INTERNET, 2026</p>
          <p>
            Hey there! Have a project, a question, or just want to say hi?
            Send me a message, and I&apos;ll get back to you soon :)
          </p>
          <p className="postcard-signoff">— Rachel Yu ♡</p>
          <a className="sticker-button sticker-button--small" href="mailto:rzyu2@illinois.edu">
            [ SEND EMAIL ]
          </a>
        </div>
        <div className="postcard-address">
          <div className="postage-stamp" aria-hidden="true">
            <span>✿</span>
            POST
          </div>
          <div className="address-lines">
            <a href="mailto:rzyu2@illinois.edu">rzyu2@illinois.edu</a>
            <a href="https://github.com/raceryu" target="_blank" rel="noreferrer">
              github.com/raceryu
            </a>
            <a href="https://www.linkedin.com/in/yu-rachel" target="_blank" rel="noreferrer">
              linkedin.com/in/yu-rachel
            </a>
          </div>
        </div>
        <div className="postmark" aria-hidden="true">
          MADE WITH CARE
          <i />
          2026
        </div>
      </div>

      <footer className="site-footer">
        <p></p>
        <a href="#top">back to the top ↑</a>
      </footer>
    </section>
  );
}
