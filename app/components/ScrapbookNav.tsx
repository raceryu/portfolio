"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

const links = [
  { label: "about", href: "/#home" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "contact", href: "#contact" },
];

export default function ScrapbookNav() {
  const handleHomeNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!document.getElementById("home")) return;

    event.preventDefault();
    window.history.replaceState(null, "", "#home");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <header className="site-nav">
      <Link
        className="nav-mark"
        href="/#home"
        aria-label="Back to top"
        onClick={handleHomeNavigation}
      >
        <span className="nav-home-icon" aria-hidden="true" />
      </Link>
      <nav
        id="primary-navigation"
        className="nav-links"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={link.href === "/#home" ? handleHomeNavigation : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
