import { Bus, Lock } from "lucide-react";

const stack = ["SwiftUI · iOS", "Python · FastAPI", "TypeScript · React", "CI & test harnesses"];

export const Work = () => (
  <section id="work" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Work</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-12">
        Featured project
      </h2>

      <div className="card-hover rounded-2xl border border-border bg-card p-8 sm:p-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Bus className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Hokie Transit</h3>
              <p className="text-sm text-muted-foreground">Founder &amp; engineer</p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            1,000+ daily users
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Real-time bus tracking for the Virginia Tech community — a native
          SwiftUI iOS app backed by a FastAPI service, built and operated
          end-to-end: product, backend, release, and incident response.
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <p className="flex items-center gap-2 text-sm text-muted-foreground mt-6">
        <Lock className="w-3.5 h-3.5" />
        My principal repositories back production systems or employer work, so
        they are private or closed-source — writeups available on request.
      </p>
    </div>
  </section>
);
