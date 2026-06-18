/**
 * SectionHeading Component - HUD Style
 * 
 * Design: Geometric HUD heading with accent line
 * - Monospace typography for technical feel
 * - Thin accent line creates sharp visual anchor
 * - Uppercase tracking for emphasis
 */

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="w-16 h-px bg-accent" />
      <h2 className="text-2xl md:text-3xl font-bold font-mono uppercase tracking-widest text-foreground">
        {children}
      </h2>
    </div>
  );
}
