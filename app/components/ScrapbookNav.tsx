"use client";

import { useState } from "react";

const links = [
  { label: "hello", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function ScrapbookNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="nav-mark" href="#home" aria-label="Back to top">
        y<span>n</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav
        id="primary-navigation"
        className={isOpen ? "nav-links nav-links--open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
