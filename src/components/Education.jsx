
import { GraduationCap, ExternalLink } from "lucide-react";
import { education as e } from "../data/portfolio";
import Section from "./Section";

const List = ({ title, items = [] }) =>
  items.length > 0 && (
    <div>
      <h4 className="font-medium">{title}</h4>
      <ul className="mt-[0.5rem] list-disc pl-[1.25rem] text-muted space-y-[0.2rem]">
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );

const Certifications = ({ items = [] }) =>
  items.length > 0 && (
    <div>
      <h4 className="font-medium">Certifications</h4>

      <div className="mt-[0.5rem] space-y-[0.75rem]">
        {items.map((cert, index) => (
          <div key={`${cert.name}-${index}`}>
            <p className="font-medium text-text">{cert.name}</p>

            <p className="text-sm text-muted">
              Issued by {cert.issuer}
            </p>

            <p className="text-sm text-muted">
              Date issued: {cert.date}
            </p>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-brand2 hover:underline text-sm"
              >
                View Certification
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic journey so far."
    >
      <ol className="relative ml-[1.25rem] border-l-[1px] border-line pl-[2rem]">
        <li className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.75rem] top-[1.25rem] grid place-items-center w-[1.5rem] h-[1.5rem] rounded-full bg-brand ring-[0.5rem] ring-bg"
          >
            <GraduationCap size={12} />
          </span>

          <div className="card p-[1.5rem] md:p-[2rem] w-[100%] md:w-[80%] space-y-[1rem]">
            <p className="text-[0.9rem] text-brand2 font-medium">
              {e.period} · {e.status}
            </p>

            <h3 className="font-display text-[1.35rem] font-semibold">
              {e.degree}
            </h3>

            <p className="text-muted">{e.school}</p>

            <List title="Relevant coursework" items={e.coursework} />

            <List title="Achievements" items={e.achievements} />

            <Certifications items={e.certifications} />
          </div>
        </li>
      </ol>
    </Section>
  );
}
