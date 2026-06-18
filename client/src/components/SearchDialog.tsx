import { useSearch } from "@/contexts/SearchContext";
import { searchContent } from "@/lib/searchIndex";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

/**
 * SearchDialog Component
 * 
 * Design: Command palette style search with real-time results
 * - Keyboard shortcut (Cmd/Ctrl + K) to open
 * - Real-time search across all content
 * - Categorized results by type
 */

export default function SearchDialog() {
  const { isOpen, setIsOpen, query, setQuery, results, setResults } =
    useSearch();
  const [, navigate] = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
        setQuery("");
        setSelectedIndex(0);
      }

      if (isOpen && e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }

      if (isOpen && e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      }

      if (isOpen && e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      }

      if (isOpen && e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        navigate(selected.link);
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, query, results, selectedIndex, setIsOpen, setQuery, navigate]);

  // Update search results
  useEffect(() => {
    const newResults = searchContent(query);
    setResults(newResults);
    setSelectedIndex(0);
  }, [query, setResults]);

  if (!isOpen) return null;

  // Group results by type
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = [];
      }
      acc[result.type].push(result);
      return acc;
    },
    {} as Record<string, typeof results>
  );

  const typeLabels: Record<string, string> = {
    project: "Projects",
    blog: "Blogs",
    publication: "Publications",
    intersection: "Intersections",
  };

  let flatIndex = 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Search Dialog */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
        <div className="w-full max-w-2xl mx-4 pointer-events-auto">
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search projects, blogs, publications, intersections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {Object.entries(groupedResults).map(([type, typeResults]) => (
                  <div key={type}>
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/50">
                      {typeLabels[type]}
                    </div>
                    {typeResults.map((result) => {
                      const isSelected = flatIndex === selectedIndex;
                      flatIndex++;

                      return (
                        <button
                          key={result.id}
                          onClick={() => {
                            navigate(result.link);
                            setIsOpen(false);
                            setQuery("");
                          }}
                          className={`w-full px-4 py-3 text-left border-b border-border/50 transition-colors ${
                            isSelected
                              ? "bg-accent/10 text-accent"
                              : "hover:bg-muted text-foreground"
                          }`}
                        >
                          <div className="font-medium text-sm">{result.title}</div>
                          {result.subtitle && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {result.subtitle}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : query ? (
              <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                No results found for "{query}"
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                Start typing to search...
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2 border-t border-border/50 bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex gap-3">
                <span>
                  <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">
                    ↑↓
                  </kbd>
                  Navigate
                </span>
                <span>
                  <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">
                    ↵
                  </kbd>
                  Select
                </span>
                <span>
                  <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">
                    Esc
                  </kbd>
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
