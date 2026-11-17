import { useState } from "react";
import { Mail, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import { sendContact } from "../services/api";
import SocialIcon from "./SocialIcon";
import Section from "./Section";

const empty = { name: "", email: "", subject: "", message: "", website: "" };
const rules = {
  name: (v) => (v.trim().length >= 2 ? "" : "Enter your name."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email address."),
  subject: (v) => (v.trim().length >= 3 ? "" : "Enter a subject (at least 3 characters)."),
  message: (v) => (v.trim().length >= 10 ? "" : "Message must be at least 10 characters."),
};

export default function Contact() {
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const change = (e) => { setF({ ...f, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: "" }); };
  const submit = async (e) => {
    e.preventDefault();
    const errs = Object.fromEntries(Object.entries(rules).map(([k, fn]) => [k, fn(f[k])]).filter(([, v]) => v));
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus({ state: "loading", msg: "" });
    try {
      const r = await sendContact(f);
      setStatus({ state: "success", msg: r.message }); setF(empty);
    } catch (err) {
      setErrors(err.errors || {}); setStatus({ state: "error", msg: err.message });
    }
  };

  const field = (name, label, type = "text") => (
    <div>
      <label htmlFor={name} className="mb-[0.4rem] block text-[0.9rem] text-muted">{label}</label>
      {name === "message"
        ? <textarea id={name} name={name} rows={5} value={f[name]} onChange={change} maxLength={2000} aria-invalid={!!errors[name]} className="input" />
        : <input id={name} name={name} type={type} value={f[name]} onChange={change} maxLength={120} aria-invalid={!!errors[name]} className="input" />}
      {errors[name] && <p className="mt-[0.35rem] text-[0.85rem] text-red-400" role="alert">{errors[name]}</p>}
    </div>
  );

  return (
    <Section id="contact" title="Let's work together" subtitle="Open to internships, collaborations, and learning opportunities. Send a message and I'll get back to you.">
      <style>{`.input{width:100%;background:#1B1B1B;border:1px solid #353535;border-radius:1rem;padding:.8rem 1rem;font-size:1rem;color:#fff;transition:border-color .2s}.input:focus{outline:none;border-color:#FF6B00}.input[aria-invalid=true]{border-color:#f87171}`}</style>
      <div className="grid gap-[2.5rem] lg:grid-cols-[35%_60%] lg:justify-between">
        <div className="space-y-[1.5rem]">
          <a href={`mailto:${profile.email}`} className="card flex items-center gap-[1rem] p-[1.25rem] transition hover:border-brand">
            <span className="grid place-items-center w-[2.75rem] h-[2.75rem] rounded-full bg-brand/15 text-brand2"><Mail size={20} /></span>
            <span className="min-w-0"><span className="block text-[0.85rem] text-muted">Email</span><span className="block truncate">{profile.email}</span></span>
          </a>
          <div><p className="mb-[0.75rem] text-[0.9rem] text-muted">Find me online</p>
            <div className="flex gap-[0.75rem]">{socials.map((s) => <SocialIcon key={s.label} {...s} />)}</div></div>
        </div>
        <form onSubmit={submit} noValidate className="card relative overflow-hidden p-[6%] space-y-[1.25rem]">
          <div className="grid gap-[1.25rem] sm:grid-cols-2">{field("name", "Full name")}{field("email", "Email address", "email")}</div>
          {field("subject", "Subject")}
          {field("message", "Message")}
          <div className="absolute -left-[9999px]" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={change} /></label></div>
          <button type="submit" disabled={status.state === "loading"} className="btn btn-primary w-[100%] sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
            {status.state === "loading" ? <><Loader2 size={18} className="animate-spin" />Sending…</> : <><Send size={18} />Send Message</>}
          </button>
          <div aria-live="polite">
            {status.state === "success" && <p className="flex items-center gap-[0.5rem] text-green-400"><CheckCircle2 size={18} />{status.msg}</p>}
            {status.state === "error" && <p className="flex items-center gap-[0.5rem] text-red-400"><AlertCircle size={18} />{status.msg}</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
