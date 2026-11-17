
import { navLinks, profile, socials } from "../data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-line px-[5vw] py-[3rem]">
      <div className="mx-auto max-w-[75rem] w-[100%] grid gap-[2rem] md:grid-cols-3 items-center">

        {/* Profile Photo and Tagline */}
        <div>
          <a href="#home" aria-label="Back to home" className="inline-flex">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-[2.5rem] h-[2.5rem] rounded-full object-cover object-center border-[1px] border-brand/50"
            />
          </a>

          <p className="mt-[0.75rem] text-[0.95rem] text-muted">
            {profile.tagline}
          </p>
        </div>

        {/* Footer Navigation */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-[1.5rem] gap-y-[0.5rem] md:justify-center"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] text-muted hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-[0.75rem] md:justify-end">
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="mx-auto mt-[2rem] max-w-[75rem] border-t-[1px] border-line pt-[1.5rem] text-[0.85rem] text-muted">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}