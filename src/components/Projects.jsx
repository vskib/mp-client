import { useEffect, useState } from "react";
import {
  Github,
  ExternalLink,
  X,
  FolderCode,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "../data/portfolio";
import Section from "./Section";

const Thumb = ({ p, className = "" }) =>
  p.image ? (
    <img
      src={p.image}
      alt={`${p.name} preview`}
      className={`w-[100%] object-cover ${className}`}
      loading="lazy"
    />
  ) : (
    <div
      className={`w-[100%] grid place-items-center bg-gradient-to-br from-brand/25 via-bg2 to-bg ${className}`}
      role="img"
      aria-label={`${p.name} preview placeholder`}
    >
      <FolderCode size={44} className="text-brand2/70" />
    </div>
  );

const Badges = ({ items }) => (
  <ul className="flex flex-wrap gap-[0.5rem]">
    {items.map((t) => (
      <li
        key={t}
        className="rounded-full bg-brand/10 text-brand2 border-[1px] border-brand/30 px-[0.75rem] py-[0.2rem] text-[0.8rem]"
      >
        {t}
      </li>
    ))}
  </ul>
);

const Links = ({ p }) => (
  <div className="flex flex-wrap gap-[0.75rem] text-[0.9rem]">
    {p.github && (
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost !py-[0.5rem]"
      >
        <Github size={16} />
        GitHub
      </a>
    )}
    {p.demo && (
      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary !py-[0.5rem]"
      >
        <ExternalLink size={16} />
        Live demo
      </a>
    )}
    {!p.github && !p.demo && (
      <span className="text-muted">
        Repository and demo links will be added soon.
      </span>
    )}
  </div>
);

function Modal({ p, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm p-[4%]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={p.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card w-[100%] max-w-[44rem] max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <Thumb p={p} className="h-[12rem] sm:h-[16rem]" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-[1rem] right-[1rem] grid place-items-center w-[2.5rem] h-[2.5rem] rounded-full bg-bg/80 border-[1px] border-line hover:border-brand"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-[6%] space-y-[1.25rem]">
          <h3 className="font-display text-[1.6rem] font-semibold">{p.name}</h3>
          <p className="text-[1rem] leading-relaxed text-muted">{p.details}</p>
          <div>
            <h4 className="mb-[0.5rem] font-medium">Key features</h4>
            <ul className="list-disc pl-[1.25rem] text-muted space-y-[0.25rem]">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-[0.5rem] font-medium">Tech stack</h4>
            <Badges items={p.stack} />
          </div>
          <Links p={p} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sel, setSel] = useState(null);
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Things I've built to practise real-world problem solving. Select a project for details."
    >
      <div className="grid gap-[2%] gap-y-[1.5rem] md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="card group overflow-hidden transition duration-300 hover:-translate-y-[0.35rem] hover:border-brand/70 hover:shadow-[0_1.5rem_3rem_-1.5rem_rgba(255,107,0,.35)]"
          >
            <button
              onClick={() => setSel(p)}
              className="block w-[100%] text-left"
              aria-label={`View details of ${p.name}`}
            >
              <div className="overflow-hidden">
                <Thumb
                  p={p}
                  className="h-[12rem] transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-[6%] space-y-[1rem]">
                <div className="flex items-start justify-between gap-[1rem]">
                  <h3 className="font-display text-[1.25rem] font-semibold leading-snug">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="shrink-0 text-muted transition group-hover:text-brand2" />
                </div>
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {p.summary}
                </p>
                <Badges items={p.stack} />
                <ul className="list-disc pl-[1.1rem] text-[0.9rem] text-muted space-y-[0.2rem]">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </button>
            <div className="px-[6%] pb-[6%]">
              <Links p={p} />
            </div>
          </article>
        ))}
      </div>
      {sel && <Modal p={sel} onClose={() => setSel(null)} />}
    </Section>
  );
}
