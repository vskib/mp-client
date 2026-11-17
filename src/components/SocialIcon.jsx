import { Github, Linkedin, Facebook, Mail } from "lucide-react";
const map = { github: Github, linkedin: Linkedin, facebook: Facebook, mail: Mail };
export default function SocialIcon({ icon, label, href }) {
  const I = map[icon] || Mail;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="grid place-items-center w-[2.75rem] h-[2.75rem] rounded-full border-[1px] border-line text-muted transition hover:text-white hover:border-brand hover:bg-brand/10">
      <I size={18} />
    </a>
  );
}
