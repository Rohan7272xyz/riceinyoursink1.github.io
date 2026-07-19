type Entry = {
  org: string;
  role: string;
  dates: string;
  meta?: string;
  bullets: string[];
};

type Venture = {
  name: string;
  status: string;
  role?: string;
  dates?: string;
  meta?: string;
  bullets?: string[];
  text?: string;
};

const experience: Entry[] = [
  {
    org: "Leidos",
    role: "Systems Integration & Software Engineering Intern, AI Automation",
    dates: "Jun 2026 to present",
    bullets: [
      "Own AI automation tooling for FAA air-traffic modernization, accelerating defect triage, test analysis, and manager reporting across software, systems, and integration/test teams.",
      "Developed a Python-backed defect-triage workflow that ingests multi-gigabyte test tarballs containing millions of mixed-format log lines, filters noise, organizes recurring failures into actionable signatures, checks Jira for duplicate PTRs, and drafts human-reviewed records.",
      "Extended the workflow to hand unresolved failures to a coding agent that investigates errors, generates proposed fixes, and routes remediation for software-developer review.",
      "Delivered the initial PTR capability in about 15 hours against a 60-hour estimate, completing Phase 1 and Phase 2 demonstrations within the first three weeks.",
      "Built Jira/JQL status-report automation for manager-ready progress summaries; developing regression-test deduplication tooling to surface redundant coverage and recommend tests to retain or remove.",
    ],
  },
  {
    org: "MAG Aerospace",
    role: "Technical Engineering Intern, C5ISR",
    dates: "Winter 2024, Summer 2025",
    bullets: [
      "Built closed-system automation for C5ISR capture workflows, including Salesforce to Python/Excel/VBA pipeline reporting and an offline Acronym Finder for RFI/proposal compliance; reduced manual processing from hours to minutes.",
      "Evaluated ISR platforms, GPS-denied navigation options, requirements, CONOPS, and procurement concepts across a $400M C5ISR portfolio.",
      "Served as Pink/Red Team reviewer during proposal recovery, correcting compliance, org-chart, and past-performance issues across defense and homeland-security pursuits.",
    ],
  },
];

const ventures: Venture[] = [
  {
    name: "Hokie Transit",
    role: "Founder & Full-Stack Engineer",
    dates: "Mar 2026 to present",
    status: "Active",
    meta: "Blacksburg, VA",
    bullets: [
      "Designed, built, and shipped a production VT/Blacksburg Transit app reaching 2,000+ downloads in its first month and 1,000+ daily active users, with native iOS/Android clients and a Python/FastAPI backend.",
      "Engineered a resilient arrivals pipeline that fuses live Blacksburg Transit feeds with GTFS schedules using confidence tiers, stale-data detection, and automatic fallback to maintain service through tracker and API outages.",
      "Own the full production and staging infrastructure, including deployment automation, rate limiting, backups, and incident monitoring that reduced silent feed-failure detection from three days to under two minutes.",
      "Built a 61-endpoint API backed by 1,500+ automated backend test cases, covering live-data ingestion, arrival predictions, alerts, authentication, and failure recovery.",
    ],
  },
  {
    name: "DeepFlight / Autonomous Flight and Perception Lab (AFPL)",
    role: "Co-Founder & Software Integration Lead",
    dates: "Apr 2025 to present",
    status: "Active",
    bullets: [
      "Co-founded DeepFlight, a four-student UAV sensing team later operating as the Autonomous Flight & Perception Lab (AFPL) under AOE Department Head Dr. Ella Atkins; earned 3-credit research backing to develop the Optical Projectile Sensing System (OPSS).",
      "Architected and integrated OPSS, a real-time airborne target-tracking pipeline spanning RealSense sensing, YOLOv8 detection, Kalman/UKF/particle-filter tracking, physics validation and fusion, FastAPI visualization, and robot-control output.",
      "Led hardware/software integration for a ground-based pan/tilt tracking system, coordinating camera, actuator, embedded compute, simulation, real-time tracking loop, and drone-park demo components.",
      "Authored LaTeX PDR/CDR documentation and presented design trades, test plans and results, system limitations, and integration findings through biweekly faculty reviews and final CDR.",
    ],
  },
  {
    name: "NEXUS",
    status: "Active",
    text: "A personal multi-agent orchestration framework. A planner model decomposes goals into scoped, self-contained directives and dispatches them to terminal coding agents running on my machines; every worker reports back under an evidence contract, and claims are audited before they are accepted.",
  },
  {
    name: "CrossCheck AI",
    status: "Concluded",
    text: "Ran the same question across multiple language models independently and surfaced agreement and disagreement, treating a single model's confident answer as a claim, not a verdict. The software worked, payments and production infrastructure were operational, and the product launched publicly. I shut it down after learning that a working product without a credible distribution advantage is not a viable business.",
  },
  {
    name: "CoinFluence",
    status: "Concluded",
    text: "A market for investing in the creators people watch every day, born from the \"investing in this\" culture of short-form comment sections. I built production AWS infrastructure at my own expense, on-chain token, vesting, and liquidity systems on Solana, and held hundreds of sales conversations with prospective users and creators. I learned too late that securities regulation and capital requirements made the real-money model untenable, and wound it down.",
  },
];

const papers = [
  { title: "OPSS White Paper Vol. 1", href: "/White_Paper_Vol1_OPSS.pdf" },
  { title: "VANNA Business Case", href: "/Business_Case_VANNA.pdf" },
  { title: "VANNA White Paper Vol. 2 (Defense)", href: "/White_Paper_Vol2_VANNA(defense).pdf" },
  { title: "VANNA White Paper Vol. 2 (Prime)", href: "/White_Paper_Vol2_VANNA(prime).pdf" },
];

const skills = [
  { group: "Languages", items: "Python, FastAPI, Bash, SQL/JQL, JavaScript/TypeScript, SwiftUI, Kotlin, MATLAB/Simulink, Git" },
  { group: "Cloud & infra", items: "AWS, Docker, Cloudflare, Linux/VPS, nginx, CI/CD, load balancing, rate limiting" },
  { group: "Systems", items: "Jira, Confluence, TestStat, SQLite/PostgreSQL, REST APIs, Firebase/Auth, MCP, Claude Code" },
  { group: "AI & testing", items: "Human-in-the-loop automation, LLM tool-use, debugging, root-cause analysis, pytest, YOLOv7/v8, PID, Kalman filtering, Gazebo, ROS" },
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
        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mb-6 md:mb-0"
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

    <Section label="Experience" delay="0.1s">
      <div className="space-y-12">
        {experience.map((e) => (
          <article key={e.org}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium md:text-lg">{e.org}</h3>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{e.dates}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {e.role}
              {e.meta ? ` · ${e.meta}` : ""}
            </p>
            <ul className="mt-3 space-y-2">
              {e.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/60"
                >
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>

    <Section label="Ventures" delay="0.15s">
      <div className="space-y-10">
        {ventures.map((v) => (
          <article key={v.name}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium md:text-lg">{v.name}</h3>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {v.dates ? `${v.dates} · ${v.status}` : v.status}
              </span>
            </div>
            {v.role && (
              <p className="text-sm text-muted-foreground mt-0.5">
                {v.role}
                {v.meta ? ` · ${v.meta}` : ""}
              </p>
            )}
            {v.bullets ? (
              <ul className="mt-3 space-y-2">
                {v.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/60"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                {v.text}
              </p>
            )}
          </article>
        ))}
      </div>
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

    <Section label="Skills" delay="0.25s">
      <dl className="space-y-4">
        {skills.map((s) => (
          <div key={s.group} className="md:grid md:grid-cols-[8rem_1fr] md:gap-4">
            <dt className="text-sm text-muted-foreground/70">{s.group}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground mt-0.5 md:mt-0">
              {s.items}
            </dd>
          </div>
        ))}
      </dl>
    </Section>

    <Section label="Education" delay="0.3s">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">Virginia Tech</h3>
        <span className="text-xs text-muted-foreground whitespace-nowrap">May 2028</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        B.S. Aerospace Engineering · GPA 3.7/4.0 · Secret clearance in
        adjudication
      </p>
    </Section>

    <footer className="reveal mt-20 md:mt-24 pt-6 border-t border-border/60 md:grid md:grid-cols-[11rem_1fr] md:gap-8" style={{ animationDelay: "0.35s" }}>
      <span className="hidden md:block" />
      <p className="text-xs text-muted-foreground">
        © 2026 Rohan Anand · <span className="select-all">rohan7272@vt.edu</span>
      </p>
    </footer>
  </main>
);

export default Index;
