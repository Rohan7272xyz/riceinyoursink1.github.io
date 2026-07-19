import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "OPSS White Paper — Vol. 1",
    tag: "White paper",
    href: "/White_Paper_Vol1_OPSS.pdf",
  },
  {
    title: "VANNA Business Case",
    tag: "Business case",
    href: "/Business_Case_VANNA.pdf",
  },
  {
    title: "VANNA White Paper Vol. 2 — Defense",
    tag: "White paper",
    href: "/White_Paper_Vol2_VANNA(defense).pdf",
  },
  {
    title: "VANNA White Paper Vol. 2 — Prime",
    tag: "White paper",
    href: "/White_Paper_Vol2_VANNA(prime).pdf",
  },
];

export const Papers = () => (
  <section id="writing" className="py-24 px-6 bg-secondary/30 border-y border-border/60">
    <div className="max-w-5xl mx-auto">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Writing</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        White papers
      </h2>
      <p className="text-muted-foreground mb-12">
        Reimagining Flight. Engineering Resilience.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {papers.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group rounded-xl border border-border bg-card p-6 flex items-start gap-4"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium leading-snug mb-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground">{p.tag} · PDF</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
          </a>
        ))}
      </div>
    </div>
  </section>
);
