import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => (
  <footer id="contact" className="py-24 px-6 border-t border-border/60">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Get in <span className="text-gradient">touch</span>
      </h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        Open to conversations about engineering, internships, and interesting
        problems.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        <a
          href="mailto:rohan7272@vt.edu"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" /> rohan7272@vt.edu
        </a>
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
      </div>

      <p className="text-xs text-muted-foreground">
        © 2026 Rohan Anand · rohananand.xyz
      </p>
    </div>
  </footer>
);
