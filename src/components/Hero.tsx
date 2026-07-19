import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative min-h-[92vh] flex items-center">
    <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
    <div className="absolute inset-0 glow pointer-events-none" aria-hidden />
    <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
      <div className="reveal flex items-center gap-3 mb-8" style={{ animationDelay: "0.05s" }}>
        <img
          src="/profile.jpg"
          alt="Rohan Anand"
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40"
        />
        <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
          Virginia Tech
        </p>
      </div>

      <h1
        className="reveal font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        style={{ animationDelay: "0.15s" }}
      >
        Rohan <span className="text-gradient">Anand</span>
      </h1>

      <p
        className="reveal text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        style={{ animationDelay: "0.25s" }}
      >
        Systems integration &amp; software engineering · human-reviewed AI
        automation · founder of{" "}
        <span className="text-foreground font-medium">Hokie Transit</span>.
      </p>

      <div className="reveal flex flex-wrap items-center gap-3" style={{ animationDelay: "0.35s" }}>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          See my work <ArrowDown className="w-4 h-4" />
        </a>
        <div className="flex items-center gap-2 sm:ml-2">
          <a
            href="https://github.com/Rohan7272xyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-anand-0657381bb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rohan7272@vt.edu"
            aria-label="Email"
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
