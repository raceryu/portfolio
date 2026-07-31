export default function Contact() {
  return (
    <section
      className="contact scrapbook-page"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-heading">
        <p className="section-kicker">you&apos;ve got mail!</p>
        <h2 id="contact-title">let&apos;s make something lovely</h2>
        <p>
          Have a project, a question, or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      <div className="postcard">
        <div className="postcard-message">
          <p className="postcard-date">SOMEWHERE ON THE INTERNET, 20XX</p>
          <p>
            Hello there! I&apos;d love to hear what you&apos;re dreaming up.
            Send a note and I&apos;ll get back to you soon.
          </p>
          <p className="postcard-signoff">— Your Name ♡</p>
          <a className="sticker-button sticker-button--small" href="mailto:hello@example.com">
            email me
          </a>
        </div>
        <div className="postcard-address">
          <div className="postage-stamp" aria-hidden="true">
            <span>✿</span>
            POST
          </div>
          <div className="address-lines">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              github.com/yourusername
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              linkedin.com/in/yourname
            </a>
          </div>
        </div>
        <div className="postmark" aria-hidden="true">
          SENT WITH CARE
          <i />
          20XX
        </div>
      </div>

      <footer className="site-footer">
        <p>designed &amp; coded with care by Your Name</p>
        <a href="#home">back to the top ↑</a>
      </footer>
    </section>
  );
}
