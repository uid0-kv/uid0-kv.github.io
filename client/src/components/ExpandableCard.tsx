import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * ExpandableCard Component - HUD Style
 * 
 * Design: Technical HUD card with sharp borders
 * - Monospace typography for content
 * - Sharp corners and minimal borders
 * - Smooth 150ms expand/collapse animation
 * - Accent color on interaction
 */

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function ExpandableCard({
  title,
  subtitle,
  imageSrc,
  description,
  link,
  linkText = "View More",
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border overflow-hidden hover:border-accent transition-all duration-150">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 md:p-5 flex items-start justify-between gap-4 hover:bg-secondary transition-colors duration-150 text-left"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-mono font-bold uppercase tracking-wide text-foreground mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs font-mono text-muted-foreground tracking-wide">{subtitle}</p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-150 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border px-4 md:px-5 py-4 md:py-5 bg-card animate-in fade-in duration-150">
          {/* Image Placeholder */}
          {imageSrc && (
            <div className="mb-4 overflow-hidden bg-muted h-48 md:h-64 flex items-center justify-center border border-border">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {!imageSrc && (
            <div className="mb-4 overflow-hidden bg-muted h-48 md:h-64 flex items-center justify-center border border-border">
              <div className="text-center text-muted-foreground">
                <p className="text-xs font-mono uppercase tracking-widest">Image Placeholder</p>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-foreground leading-relaxed mb-4 text-sm font-mono">{description}</p>

          {/* Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-accent/80 font-mono text-xs uppercase tracking-wide transition-colors duration-150 group"
            >
              {linkText}
              <span className="ml-2 transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
