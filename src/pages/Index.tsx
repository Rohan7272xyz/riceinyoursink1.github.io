const EMAIL = "mailto:rohan7272@vt.edu";
const GITHUB = "https://github.com/Rohan7272xyz";
const LINKEDIN = "https://www.linkedin.com/in/rohan-anand-0657381bb/";

const CONTAINER = "mx-auto w-full max-w-[1120px] px-5 md:px-8";
const LABEL =
  "font-mono-label text-xs uppercase tracking-[0.1em] text-subtle";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

type WorkItem = {
  meta: string;
  name: string;
  summary: string;
  facts: string[];
  tech?: string;
  more?: string[];
};

const work: WorkItem[] = [
  {
    meta: "01 · 2026",
    name: "Hokie Transit",
    summary:
      "A production transit app for the Virginia Tech community: native iOS and Android clients on a Python/FastAPI backend, built, shipped, and operated end to end.",
    facts: [
      "2,000+ downloads in the first month; 1,000+ daily active users.",
      "61-endpoint API backed by 1,500+ automated backend test cases covering live-data ingestion, arrival predictions, alerts, authentication, and failure recovery.",
      "Incident monitoring cut silent feed-failure detection from three days to under two minutes.",
    ],
    tech: "SwiftUI · Kotlin · Python · FastAPI",
    more: [
      "Resilient arrivals pipeline fuses live Blacksburg Transit feeds with GTFS schedules using confidence tiers, stale-data detection, and automatic fallback to stay in service through tracker and API outages.",
      "Full ownership of production and staging infrastructure: deployment automation, rate limiting, backups, and incident monitoring.",
    ],
  },
  {
    meta: "02 · 2025",
    name: "DeepFlight / AFPL",
    summary:
      "Co-founded a four-student UAV sensing team, now operating as the Autonomous Flight and Perception Lab under AOE Department Head Dr. Ella Atkins, with 3-credit research backing.",
    facts: [
      "Architected and integrated OPSS, a real-time airborne target-tracking pipeline: RealSense sensing, YOLOv8 detection, Kalman/UKF/particle-filter tracking, physics validation and fusion, and robot-control output.",
      "Led hardware and software integration for a ground-based pan/tilt tracking system through a live drone-park demo.",
      "Authored LaTeX PDR/CDR documentation and presented design trades, test plans, and results through biweekly faculty reviews and final CDR.",
    ],
    tech: "Python · YOLOv8 · RealSense · FastAPI",
  },
  {
    meta: "03 · Active",
    name: "NEXUS",
    summary:
      "A personal multi-agent orchestration framework: a planner model decomposes goals into scoped, self-contained directives and dispatches them to terminal coding agents on my machines.",
    facts: [
      "Every worker reports under an evidence contract; a status claim is audited against its evidence before it is accepted.",
      "Directives are validated, deduplicated, and run in isolated sessions, so work survives disconnects and stays reproducible.",
    ],
  },
  {
    meta: "04 · Concluded",
    name: "CrossCheck AI",
    summary:
      "A product that ran the same question across multiple language models independently and surfaced agreement and disagreement, treating a single model's confident answer as a claim, not a verdict.",
    facts: [
      "The multi-model answer-and-verify core worked; payments and production infrastructure were operational; the product launched publicly.",
      "Shut down after failing to validate distribution: a working product without a credible distribution advantage is not a viable business.",
    ],
  },
  {
    meta: "05 · Concluded",
    name: "CoinFluence",
    summary:
      'A market for investing in the creators people watch every day, born from the "investing in this" culture of short-form comment sections.',
    facts: [
      "Built production AWS infrastructure at my own expense, plus on-chain token, vesting, and liquidity systems on Solana.",
      "Held hundreds of sales conversations with prospective users and creators.",
      "Wound down after learning too late that securities regulation and capital requirements made the real-money model untenable.",
    ],
  },
];

type Job = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  more?: string[];
};

const jobs: Job[] = [
  {
    company: "Leidos",
    role: "Systems Integration & Software Engineering Intern, AI Automation",
    dates: "Jun 2026 to present",
    summary:
      "AI automation tooling for FAA air-traffic modernization, accelerating defect triage, test analysis, and manager reporting across software, systems, and integration/test teams.",
    bullets: [
      "Built a Python defect-triage workflow that ingests multi-gigabyte test tarballs with millions of mixed-format log lines, filters noise, organizes recurring failures into actionable signatures, checks Jira for duplicate PTRs, and drafts human-reviewed records.",
      "Delivered the initial PTR capability in about 15 hours against a 60-hour estimate, completing Phase 1 and Phase 2 demonstrations within the first three weeks.",
      "Extended the workflow to hand unresolved failures to a coding agent that investigates errors, generates proposed fixes, and routes remediation for software-developer review.",
    ],
    more: [
      "Built Jira/JQL status-report automation for manager-ready progress summaries; developing regression-test deduplication tooling to surface redundant coverage and recommend tests to retain or remove.",
    ],
  },
  {
    company: "MAG Aerospace",
    role: "Technical Engineering Intern, C5ISR",
    dates: "Winter 2024, Summer 2025",
    summary: "Capture and proposal engineering across a $400M C5ISR portfolio.",
    bullets: [
      "Built closed-system automation for C5ISR capture workflows: Salesforce to Python/Excel/VBA pipeline reporting and an offline Acronym Finder for RFI and proposal compliance, reducing manual processing from hours to minutes.",
      "Evaluated ISR platforms, GPS-denied navigation options, requirements, CONOPS, and procurement concepts across the portfolio.",
      "Served as Pink/Red Team reviewer during proposal recovery, correcting compliance, org-chart, and past-performance issues across defense and homeland-security pursuits.",
    ],
  },
];

const papers = [
  { title: "OPSS White Paper Vol. 1", href: "/White_Paper_Vol1_OPSS.pdf" },
  { title: "VANNA Business Case", href: "/Business_Case_VANNA.pdf" },
  {
    title: "VANNA White Paper Vol. 2 (Defense)",
    href: "/White_Paper_Vol2_VANNA(defense).pdf",
  },
  {
    title: "VANNA White Paper Vol. 2 (Prime)",
    href: "/White_Paper_Vol2_VANNA(prime).pdf",
  },
];

const skills = [
  {
    group: "Software",
    items: "Python, FastAPI, SwiftUI, Kotlin, JavaScript/TypeScript, Bash, SQL/JQL",
  },
  {
    group: "Systems",
    items: "AWS, Docker, Linux, nginx, CI/CD, REST APIs, Jira, SQLite/PostgreSQL",
  },
  {
    group: "Autonomy",
    items: "MATLAB/Simulink, ROS, Gazebo, YOLOv7/v8, Kalman filtering, PID",
  },
];

const Fact = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-4 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:content-['·'] before:text-subtle">
    {children}
  </li>
);

const MoreDetails = ({ items }: { items: string[] }) => (
  <details className="mt-2">
    <summary className="inline-flex min-h-[44px] cursor-pointer items-center font-mono-label text-xs uppercase tracking-[0.1em] text-subtle hover:text-primary">
      More details
    </summary>
    <ul className="mb-2 space-y-2">
      {items.map((m, i) => (
        <Fact key={i}>{m}</Fact>
      ))}
    </ul>
  </details>
);

const Index = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
    >
      Skip to content
    </a>

    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className={`${CONTAINER} flex h-16 items-center justify-between`}>
        <a href="#main" className="text-[15px] font-semibold tracking-tight">
          Rohan Anand
        </a>
        <nav aria-label="Site">
          <ul className="flex items-center gap-1 sm:gap-4">
            {[
              ["Work", "#work"],
              ["Experience", "#experience"],
              ["About", "#about"],
            ].map(([t, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="link-draw inline-flex min-h-[44px] items-center px-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    <main id="main">
      {/* Hero */}
      <section className={`${CONTAINER} pb-24 pt-[88px]`}>
        <div className="md:grid md:grid-cols-[140px_1fr] md:gap-10">
          <img
            src="/profile.jpg"
            alt="Rohan Anand"
            width={132}
            height={165}
            className="mb-8 h-[165px] w-[132px] rounded border border-border object-cover md:mb-0"
          />
          <div>
            <h1 className="text-[clamp(44px,6vw,68px)] font-semibold leading-[1.05] tracking-tight">
              Rohan Anand
            </h1>
            <p className="mt-5 max-w-[46rem] text-[clamp(21px,2.3vw,29px)] font-normal leading-snug">
              Aerospace engineering student building reliable software and
              systems for real-world operations.
            </p>
            <p className="mt-5 max-w-[68ch] leading-relaxed text-muted-foreground">
              Currently working across systems integration, transportation, and
              autonomous flight, including AI-assisted automation at Leidos and
              production transit software at Hokie Transit.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-0">
              <li>
                <a
                  href="#work"
                  className="link-draw inline-flex min-h-[44px] items-center text-[15px]"
                >
                  Selected work ↓
                </a>
              </li>
              <li>
                <a
                  href={EMAIL}
                  className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
                >
                  Email ↗
                </a>
              </li>
              <li>
                <a
                  href={GITHUB}
                  {...EXT}
                  className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  {...EXT}
                  className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" aria-labelledby="work-h" className="scroll-mt-16">
        <div className={CONTAINER}>
          <h2 id="work-h" className={`${LABEL} border-t border-border pt-6`}>
            Selected Work
          </h2>
          <div className="divide-y divide-border">
            {/* Featured: Hokie Transit, with real app screenshot */}
            <article className="py-10 md:grid md:grid-cols-[1fr_260px] md:gap-12 md:py-14">
              <div>
                <p className={LABEL}>{work[0].meta}</p>
                <h3 className="mt-2 text-[23px] font-semibold tracking-tight md:text-[25px]">
                  {work[0].name}
                </h3>
                <p className="mt-3 max-w-[68ch] leading-relaxed text-muted-foreground">
                  {work[0].summary}
                </p>
                <ul className="mt-4 max-w-[68ch] space-y-2">
                  {work[0].facts.map((f, i) => (
                    <Fact key={i}>{f}</Fact>
                  ))}
                </ul>
                {work[0].more && <MoreDetails items={work[0].more} />}
                <p className={`${LABEL} mt-4 normal-case tracking-normal`}>
                  {work[0].tech}
                </p>
              </div>
              <figure className="img-frame mt-8 md:mt-1">
                <div className="max-w-[240px] overflow-hidden rounded border border-border md:max-w-none">
                  <img
                    src="/hokie-transit-app.png"
                    alt="HokieTransit iOS home screen showing live Blacksburg Transit arrivals and a departure suggestion"
                    width={720}
                    height={1565}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 font-mono-label text-xs text-subtle">
                  Production app, live arrivals view
                </figcaption>
              </figure>
            </article>

            {work.slice(1).map((w) => (
              <article key={w.name} className="py-10 md:py-12">
                <p className={LABEL}>{w.meta}</p>
                <h3 className="mt-2 text-[23px] font-semibold tracking-tight">
                  {w.name}
                </h3>
                <p className="mt-3 max-w-[68ch] leading-relaxed text-muted-foreground">
                  {w.summary}
                </p>
                <ul className="mt-4 max-w-[68ch] space-y-2">
                  {w.facts.map((f, i) => (
                    <Fact key={i}>{f}</Fact>
                  ))}
                </ul>
                {w.more && <MoreDetails items={w.more} />}
                {w.tech && (
                  <p className={`${LABEL} mt-4 normal-case tracking-normal`}>
                    {w.tech}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        aria-labelledby="experience-h"
        className="scroll-mt-16"
      >
        <div className={CONTAINER}>
          <div className="border-t border-border pt-6 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
            <h2 id="experience-h" className={`${LABEL} mb-8 md:mb-0`}>
              Experience
            </h2>
            <div className="space-y-14 pb-4">
              {jobs.map((j) => (
                <article key={j.company}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-[22px] font-semibold tracking-tight">
                      {j.company}
                    </h3>
                    <p className="font-mono-label text-xs text-subtle sm:whitespace-nowrap">
                      {j.dates}
                    </p>
                  </div>
                  <p className="mt-0.5 text-[15px] text-subtle">{j.role}</p>
                  <p className="mt-3 max-w-[68ch] leading-relaxed text-muted-foreground">
                    {j.summary}
                  </p>
                  <ul className="mt-4 max-w-[68ch] space-y-2">
                    {j.bullets.map((b, i) => (
                      <Fact key={i}>{b}</Fact>
                    ))}
                  </ul>
                  {j.more && <MoreDetails items={j.more} />}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Education */}
      <section id="about" aria-labelledby="about-h" className="scroll-mt-16">
        <div className={CONTAINER}>
          <div className="border-t border-border pt-6 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
            <h2 id="about-h" className={`${LABEL} mb-8 md:mb-0`}>
              About
            </h2>
            <div className="pb-4">
              <p className="max-w-[68ch] leading-relaxed">
                I study aerospace engineering at Virginia Tech and build
                production software around it: systems integration, transit
                operations, and autonomous flight. My current focus is
                human-reviewed AI automation, where AI does the heavy lifting
                and a person stays in the loop for every decision that matters.
              </p>
              <div className="mt-8">
                <h3 className="text-[15px] font-semibold">Virginia Tech</h3>
                <p className="mt-1 max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground">
                  B.S. Aerospace Engineering, May 2028. GPA 3.7/4.0. Secret
                  clearance in adjudication.
                </p>
              </div>
              <dl className="mt-8 space-y-2">
                {skills.map((s) => (
                  <div
                    key={s.group}
                    className="sm:grid sm:grid-cols-[6.5rem_1fr] sm:gap-3"
                  >
                    <dt className="font-mono-label text-xs uppercase tracking-[0.1em] text-subtle sm:pt-1">
                      {s.group}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-muted-foreground">
                      {s.items}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section
        id="writing"
        aria-labelledby="writing-h"
        className="scroll-mt-16"
      >
        <div className={CONTAINER}>
          <div className="border-t border-border pt-6 md:grid md:grid-cols-[11rem_1fr] md:gap-8">
            <h2 id="writing-h" className={`${LABEL} mb-8 md:mb-0`}>
              Writing
            </h2>
            <ul className="pb-10 md:-mt-3">
              {papers.map((p) => (
                <li
                  key={p.href}
                  className="border-b border-border last:border-0"
                >
                  <a
                    href={p.href}
                    {...EXT}
                    className="row-link flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="row-title text-muted-foreground">
                      {p.title}
                    </span>
                    <span className="row-arrow font-mono-label text-xs text-subtle">
                      PDF ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-border">
      <div className={`${CONTAINER} py-14`}>
        <p className="text-[15px] font-semibold">Rohan Anand</p>
        <ul className="mt-3 flex flex-wrap items-center gap-x-7">
          <li>
            <a
              href={EMAIL}
              className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={GITHUB}
              {...EXT}
              className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              {...EXT}
              className="link-draw inline-flex min-h-[44px] items-center text-[15px] text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-6 font-mono-label text-xs text-subtle">
          © 2026 Rohan Anand · rohananand.xyz
        </p>
      </div>
    </footer>
  </>
);

export default Index;
