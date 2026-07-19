const papers = [
  { title: "OPSS White Paper — Vol. 1", href: "/White_Paper_Vol1_OPSS.pdf" },
  { title: "VANNA Business Case", href: "/Business_Case_VANNA.pdf" },
  { title: "VANNA White Paper Vol. 2 — Defense", href: "/White_Paper_Vol2_VANNA(defense).pdf" },
  { title: "VANNA White Paper Vol. 2 — Prime", href: "/White_Paper_Vol2_VANNA(prime).pdf" },
];

const Index = () => (
  <main className="mx-auto max-w-xl px-6 py-20 sm:py-28">
    <header className="reveal">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Rohan Anand</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Software &amp; systems · Virginia Tech
          </p>
        </div>
        <img
          src="/profile.jpg"
          alt=""
          className="w-12 h-12 rounded-full object-cover grayscale"
        />
      </div>

      <p className="mt-8 leading-relaxed text-[15px]">
        Systems integration and software engineering, with a focus on
        human-reviewed AI automation. Founder of Hokie Transit.
      </p>

      <p className="mt-4 text-sm text-muted-foreground">
        <a href="mailto:rohan7272@vt.edu" className="link">Email</a>
        <span className="mx-2">·</span>
        <a href="https://github.com/Rohan7272xyz" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
        <span className="mx-2">·</span>
        <a href="https://www.linkedin.com/in/rohan-anand-0657381bb/" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
      </p>
    </header>

    <section className="reveal mt-16" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-sm font-medium text-muted-foreground mb-6">Work</h2>
      <article>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium">Hokie Transit</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap">2025 —</span>
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          Real-time bus tracking for the Virginia Tech community. A native
          SwiftUI iOS app backed by a FastAPI service — built and operated
          end-to-end, serving 1,000+ daily users.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">
          SwiftUI · Python · FastAPI
        </p>
      </article>
      <p className="mt-8 text-xs leading-relaxed text-muted-foreground/70">
        Most of my repositories back production systems or employer work and
        are private — writeups available on request.
      </p>
    </section>

    <section className="reveal mt-16" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-sm font-medium text-muted-foreground mb-2">Writing</h2>
      <ul>
        {papers.map((p) => (
          <li key={p.href} className="border-b border-border/60 last:border-0">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-[15px] group-hover:text-foreground text-foreground/90 transition-colors">
                {p.title}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                PDF ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>

    <footer className="reveal mt-20 pt-6 border-t border-border/60" style={{ animationDelay: "0.3s" }}>
      <p className="text-xs text-muted-foreground">
        © 2026 Rohan Anand · <span className="select-all">rohan7272@vt.edu</span>
      </p>
    </footer>
  </main>
);

export default Index;
