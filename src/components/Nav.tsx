const links = [
  { href: "#work", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 h-14">
      <a href="#top" className="font-display font-bold text-lg tracking-tight">
        <span className="text-gradient">RA</span>
      </a>
      <div className="flex items-center gap-1 sm:gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  </header>
);
