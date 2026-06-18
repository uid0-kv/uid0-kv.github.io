import React, { createContext, useContext, useState } from "react";

export interface SearchResult {
  id: string;
  type: "project" | "blog" | "publication" | "intersection";
  title: string;
  subtitle?: string;
  description: string;
  link: string;
}

interface SearchContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  setResults: (results: SearchResult[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <SearchContext.Provider
      value={{ isOpen, setIsOpen, query, setQuery, results, setResults }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
}
