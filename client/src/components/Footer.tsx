/**
 * Footer Component - HUD Style
 * 
 * Design: Technical HUD footer with monospace typography
 * - Consistent with overall HUD design language
 * - Sharp borders and minimal styling
 * - Accent color on hover
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest">
              About
            </h3>
            <p className="text-xs font-mono text-muted-foreground leading-relaxed">
              A technical portfolio showcasing research, projects, and creative pursuits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Home
              </a>
              <a
                href="/projects"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Projects
              </a>
              <a
                href="/blogs"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Blogs
              </a>
              <a
                href="/publications"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Publications
              </a>
              <a
                href="/intersections"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Intersections
              </a>
              <a
                href="/fun"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Fun
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:your.email@example.com"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors duration-150"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 md:mt-12 pt-8 md:pt-12">
          <p className="text-xs font-mono text-muted-foreground text-center">
            © {currentYear} All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
