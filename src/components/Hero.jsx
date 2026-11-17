import { useState } from "react";
import { Download, FolderGit2 } from "lucide-react";
import { profile, socials, projects, skillGroups } from "../data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const stats = [
    { value: projects.length, label: "Projects Developed" },
    { value: skillGroups.reduce((n, g) => n + g.items.length, 0), label: "Technologies Explored" },
    { value: Math.max(1, new Date().getFullYear() - profile.startYear), label: "Years of Learning" },
  ];
  return (
    <section id="home" className="px-[3vw] pt-[6.5rem] pb-[2rem]">
      <div className="relative overflow-hidden mx-auto max-w-[75rem] w-[100%] rounded-[2rem] md:rounded-[3rem] border-[1px] border-line bg-gradient-to-br from-bg2 to-bg px-[6%] py-[3rem] md:py-[4.5rem]">
        <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-[20%] w-[60%] aspect-square rounded-full bg-brand/25 blur-[6rem] animate-drift" />
        <div aria-hidden className="pointer-events-none absolute -left-[15%] -bottom-[30%] w-[45%] aspect-square rounded-full bg-brand2/10 blur-[6rem] animate-drift [animation-delay:-4s]" />
        <div className="relative grid gap-[3rem] md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[1.1rem] text-muted">Hello, I'm</p>
            <h1 className="mt-[0.25rem] font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.05]">
              <span className="bg-gradient-to-r from-brand via-brand2 to-brand bg-[length:200%_auto] bg-clip-text text-transparent animate-sheen">{profile.name}</span>
            </h1>
            <p className="mt-[1rem] font-display text-[1.15rem] sm:text-[1.35rem] font-medium">{profile.headline}</p>
            <p className="mt-[1rem] text-[1rem] leading-relaxed text-muted w-[100%] lg:w-[90%]">{profile.intro}</p>
            <div className="mt-[2rem] flex flex-wrap gap-[0.75rem]">
              <a href="#projects" className="btn btn-primary"><FolderGit2 size={18} />View My Projects</a>
              <a href={profile.resume} download className="btn btn-ghost"><Download size={18} />Download Resume</a>
            </div>
            <div className="mt-[1.5rem] flex gap-[0.75rem]">{socials.map((s) => <SocialIcon key={s.label} {...s} />)}</div>
            <dl className="mt-[2.5rem] grid grid-cols-3 gap-[3%]">
              {stats.map((s) => (
                <div key={s.label} className="card flex flex-col-reverse px-[6%] py-[1rem] rounded-[1.25rem]">
                  <dt className="text-[0.75rem] sm:text-[0.85rem] text-muted leading-snug">{s.label}</dt>
                  <dd className="font-display text-[1.75rem] sm:text-[2rem] font-semibold text-brand2">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[80%] max-w-[26rem] md:w-[100%] aspect-square">
              <div aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-b from-card to-bg border-[1px] border-line" />
              <div aria-hidden className="absolute inset-[8%] rounded-full bg-brand/20 blur-[3rem]" />
              {imgOk ? (
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setImgOk(false)}
                     className="absolute inset-0 w-[100%] h-[100%] rounded-full object-cover object-top grayscale contrast-110" />
              ) : (
                <div className="absolute inset-0 grid place-items-center font-display text-[5rem] font-bold text-brand/80" role="img" aria-label="Profile photo placeholder">{profile.initials}</div>
              )}
              <div aria-hidden className="absolute inset-0 rounded-full shadow-[inset_0_-3rem_4rem_-2rem_rgba(255,107,0,.45)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
