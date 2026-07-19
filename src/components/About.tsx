export const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-start">
      <div>
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">About</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Building and running software end-to-end
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            I work across the stack — native iOS clients in SwiftUI, Python
            backend services, and the test and release infrastructure that
            keeps them reliable in production.
          </p>
          <p>
            Recently my focus has been human-reviewed AI automation: pipelines
            where AI does the heavy lifting and a human stays in the loop for
            every decision that matters.
          </p>
        </div>
      </div>
      <img
        src="/profile.jpg"
        alt="Rohan Anand"
        className="hidden md:block w-40 h-40 rounded-2xl object-cover border border-border"
      />
    </div>
  </section>
);
