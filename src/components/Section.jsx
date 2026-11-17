import useReveal from "../hooks/useReveal";
export default function Section({ id, title, subtitle, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="px-[5vw] py-[5rem]">
      <div ref={ref} className="reveal w-[100%] mx-auto max-w-[75rem]">
        {title && (
          <header className="mb-[2.5rem] w-[100%] md:w-[60%]">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-semibold leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-[0.75rem] text-[1rem] text-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
