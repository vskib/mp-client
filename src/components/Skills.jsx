import { Network, Code2 } from "lucide-react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { Github } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import Section from "./Section";

const icons = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  api: Network,
  postgres: SiPostgresql,
  supabase: SiSupabase,
  git: SiGit,
  github: Github,
  vscode: Code2, 
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="The tools and technologies I use to build and learn."
    >
      <div className="grid gap-[1.5rem] md:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="card p-[1.5rem] transition hover:border-brand/60"
          >
            <h3 className="font-display text-[1.15rem] font-semibold">
              {g.title}
            </h3>
            <ul className="mt-[1.25rem] flex flex-wrap gap-[0.75rem]">
              {g.items.map((s) => {
                const I = icons[s.icon] || Code2;
                return (
                  <li
                    key={s.name}
                    className="flex items-center gap-[0.6rem] rounded-full border-[1px] border-line bg-bg2 px-[1rem] py-[0.55rem] text-[0.9rem] transition hover:border-brand hover:-translate-y-[2px]"
                  >
                    <I className="text-brand2" size={18} aria-hidden />
                    {s.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
