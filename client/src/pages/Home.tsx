/**
 * Home Page - HUD Style
 * 
 * Design: Technical HUD hero with monospace typography
 * - Monospace heading for technical feel
 * - Asymmetric layout with image on right
 * - Sharp borders and minimal styling
 */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Bio & Contact */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-widest text-foreground mb-4">
                Welcome
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                I'm a researcher and intellectual passionate about exploring complex problems at the intersection of technology, science, and society. This is my space to share my work, thoughts, and creative pursuits.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-accent hover:text-accent/80 font-mono text-sm transition-colors duration-150"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">Social</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-mono text-sm transition-colors duration-150"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-mono text-sm transition-colors duration-150"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-mono text-sm transition-colors duration-150"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square border border-border bg-muted flex items-center justify-center overflow-hidden">
              <div className="text-center text-muted-foreground">
                <p className="text-xs font-mono uppercase tracking-widest">Profile Image</p>
                <p className="text-xs font-mono text-muted-foreground/70">Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container py-16 md:py-24 border-t border-border">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-16 h-px bg-accent" />
            <h2 className="text-2xl md:text-3xl font-bold font-mono uppercase tracking-widest text-foreground">
              Explore My Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Projects",
                description: "Active research projects and technical implementations",
                href: "/projects",
              },
              {
                title: "Blogs",
                description: "Thoughts, insights, and explorations on various topics",
                href: "/blogs",
              },
              {
                title: "Publications",
                description: "Academic papers, articles, and research outputs",
                href: "/publications",
              },
              {
                title: "Intersections",
                description: "Cross-domain insights exploring convergences between diverse fields",
                href: "/intersections",
              },
              {
                title: "Fun",
                description: "Personal interests, creative work, and life outside research",
                href: "/fun",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-5 border border-border hover:border-accent transition-all duration-150 group"
              >
                <h3 className="text-base font-mono font-bold uppercase tracking-wide text-foreground mb-2 group-hover:text-accent transition-colors duration-150">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
