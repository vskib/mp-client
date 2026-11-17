import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";

const ids = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  const link = (l) => (
    <a
      key={l.href}
      href={l.href}
      onClick={() => setOpen(false)}
      className={`text-[0.95rem] transition-colors ${
        active === l.href.slice(1)
          ? "text-brand2"
          : "text-muted hover:text-white"
      }`}
    >
      {l.label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-[3vw] pt-[1rem]">
      <nav
        aria-label="Main"
        className="mx-auto max-w-[75rem] w-[100%] rounded-full border-[1px] border-line bg-bg/80 backdrop-blur-md px-[1.25rem] py-[0.6rem] flex items-center justify-between"
      >
        {/* Profile Photo Logo */}
        <a href="#home" className="flex items-center" aria-label="Home">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-[2.5rem] h-[2.5rem] rounded-full object-cover object-center border-[1px] border-brand/50"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[2rem]">
          {navLinks.map(link)}
        </div>

        <a
          href="#contact"
          className="btn btn-primary hidden md:inline-flex !py-[0.55rem]"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-[0.5rem]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden mx-auto mt-[0.5rem] w-[100%] max-w-[75rem] overflow-hidden rounded-[1.5rem] border-[1px] border-line bg-bg2/95 backdrop-blur-md transition-all duration-300 ${
          open
            ? "max-h-[28rem] opacity-100"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-[1.25rem] p-[1.5rem]">
          {navLinks.map(link)}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
