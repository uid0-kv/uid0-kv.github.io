import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Search } from "lucide-react";
import { Link } from "wouter";
import { useSearch } from "@/contexts/SearchContext";

/**
 * Navigation Component - HUD Style
 * 
 * Design: Minimalist HUD aesthetic inspired by Google Project Zero
 * - Monospace typography for technical feel
 * - Sharp corners and minimal borders
 * - Cyan accent color with high contrast
 * - Geometric underline on hover
 */

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Publications", href: "/publications" },
  { label: "Intersections", href: "/intersections" },
  { label: "Fun", href: "/fun" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { setIsOpen } = useSearch();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border transition-colors duration-250">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / Name - HUD Style */}
        <Link href="/">
          <a className="text-sm font-bold tracking-widest text-foreground hover:text-accent transition-colors duration-150 uppercase font-mono">
            &lt;portfolio /&gt;
          </a>
        </Link>

        {/* Nav Links & Theme Toggle */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation - HUD Style */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-150 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-150 group-hover:w-full" />
                </a>
              </Link>
            ))}
          </div>

          {/* Search Button - HUD Style */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-150 text-xs font-mono uppercase tracking-wide"
            title="Press Cmd+K or Ctrl+K to search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">search</span>
            <kbd className="hidden lg:inline ml-2 text-xs px-1.5 py-0.5 border border-accent/50 bg-background/50">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle - HUD Style */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-border hover:border-accent hover:text-accent transition-all duration-150 focus:outline-none"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-foreground transition-transform duration-300" />
              ) : (
                <Sun className="w-4 h-4 text-foreground transition-transform duration-300" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation - HUD Style */}
      <div className="sm:hidden px-4 pb-3 flex flex-wrap gap-2">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className="text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-150 px-2 py-1 border border-transparent hover:border-accent">
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
