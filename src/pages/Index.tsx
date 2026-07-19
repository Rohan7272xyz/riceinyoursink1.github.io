const papers = [
  { title: "OPSS White Paper Vol. 1", href: "/White_Paper_Vol1_OPSS.pdf" },
  { title: "VANNA Business Case", href: "/Business_Case_VANNA.pdf" },
  { title: "VANNA White Paper Vol. 2 (Defense)", href: "/White_Paper_Vol2_VANNA(defense).pdf" },
  { title: "VANNA White Paper Vol. 2 (Prime)", href: "/White_Paper_Vol2_VANNA(prime).pdf" },
];

const Section = ({
  label,
  delay,
  children,
}: {
  label: string;
  delay: string;
  children: React.ReactNode;
}) => (
  <section
    className="reveal mt-16 md:mt-20 md:grid md:grid-cols-[11rem_1fr] md:gap-8"
    style={{ animationDelay: delay }}
  >
    <h2 className="text-sm font-medium text-muted-foreground mb-6 md:mb-0 md:pt-0.5">
      {label}
    </h2>
    <div>{children}</div>
  </section>
);

const Index = () => (
  <main className="mx-auto max-w-4xl px-6 sm:px-10 py-20 sm:py-28 md:py-36">
    <header className="reveal md:grid md:grid-cols-[11rem_1fr] md:gap-8">
      <img
        src="/profile.jpg"
        alt=""
        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover grayscale mb-6 md:mb-0"
      />
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Rohan Anand
        </h1>
        <p className="text-muted-foreground mt-1">
          Software &amp; systems · Virginia Tech
        </p>

        <p className="mt-6 leading-relaxed max-w-2xl md:text-lg md:leading-relaxed">
          Systems integration and software engineering, with a focus on
          human-reviewed AI automation. Founder of Hokie Transit.
        </p>

        <p className="mt-5 text-sm text-muted-foreground">
          <a href="mailto:rohan7272@vt.edu" className="link">Email</a>
          <span className="mx-2.5">·</span>
          <a href="https://github.com/Rohan7272xyz" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          <span className="mx-2.5">·</span>
          <a href="https://www.linkedin.com/in/rohan-anand-0657381bb/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
        </p>
      </div>
    </header>

    <Section label="Work" delay="0.1s">
      <article>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium md:text-lg">Hokie Transit</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap">Since 2025</span>
        </div>
        <p className="mt-2 leading-relaxed text-muted-foreground max-w-2xl">
          Real-time bus tracking for the Virginia Tech community. A native
          SwiftUI iOS app backed by a FastAPI service, built and operated
          end-to-end, serving 1,000+ daily users.
        </p>
        <p className="mt-2.5 text-xs text-muted-foreground/70">
          SwiftUI · Python · FastAPI
        </p>
      </article>
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground/70 max-w-2xl">
        Most of my repositories back production systems or employer work and
        are private; writeups are available on request.
      </p>
    </Section>

    <Section label="Writing" delay="0.2s">
      <ul className="-mt-3">
        {papers.map((p) => (
          <li key={p.href} className="border-b border-border/60 last:border-0">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3.5"
            >
              <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                {p.title}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                PDF ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>

    <footer className="reveal mt-20 md:mt-24 pt-6 border-t border-border/60 md:grid md:grid-cols-[11rem_1fr] md:gap-8" style={{ animationDelay: "0.3s" }}>
      <span className="hidden md:block" />
      <p className="text-xs text-muted-foreground">
        © 2026 Rohan Anand · <span className="select-all">rohan7272@vt.edu</span>
      </p>
    </footer>
  </main>
);

export default Index;
