import { Target, Sparkles } from "lucide-react";
import { about } from "../data/portfolio";
import Section from "./Section";

const Terminal = () => (
  <div className="card overflow-hidden w-[100%]" aria-hidden>
    <div className="flex items-center gap-[0.4rem] border-b-[1px] border-line bg-bg2 px-[1rem] py-[0.75rem]">
      {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => <span key={c} className="w-[0.7rem] h-[0.7rem] rounded-full" style={{ background: c }} />)}
      <span className="ml-[0.75rem] text-[0.75rem] text-muted">developer.js</span>
    </div>
    <pre className="overflow-x-auto p-[1.25rem] text-[0.8rem] sm:text-[0.9rem] leading-relaxed text-muted"><code>{`const developer = {
  studying: "BS Information Technology",
  focus: ["React", "Node.js", "PostgreSQL"],
  learning: true,
  buildNext() {
    return "something useful";
  },
};`}</code></pre>
  </div>
);

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A student builder who learns by shipping practical projects.">
      <div className="grid gap-[2.5rem] lg:grid-cols-[55%_40%] lg:justify-between items-start">
        <div className="space-y-[1.25rem] text-[1rem] leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="grid gap-[1rem] sm:grid-cols-2 pt-[0.5rem]">
            <div className="card p-[1.25rem]"><h3 className="flex items-center gap-[0.5rem] text-white font-medium"><Sparkles size={18} className="text-brand" />Interests</h3>
              <ul className="mt-[0.75rem] space-y-[0.35rem] text-[0.95rem]">{about.interests.map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div className="card p-[1.25rem]"><h3 className="flex items-center gap-[0.5rem] text-white font-medium"><Target size={18} className="text-brand" />Career goals</h3>
              <ul className="mt-[0.75rem] space-y-[0.35rem] text-[0.95rem]">{about.goals.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </div>
        </div>
        <Terminal />
      </div>
    </Section>
  );
}
