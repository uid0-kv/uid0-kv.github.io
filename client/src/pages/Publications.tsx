import ExpandableCard from "@/components/ExpandableCard";
import SectionHeading from "@/components/SectionHeading";

/**
 * Publications Page
 * 
 * Design: Minimalist publication showcase with expandable cards
 * - Grid layout with expandable publication cards
 * - Each card shows title, authors/year, and expands to show abstract and link
 */

interface Publication {
  id: string;
  title: string;
  authors: string;
  description: string;
  link: string;
  linkText: string;
}

const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Novel Approaches to Machine Learning Optimization",
    authors: "Smith, J., Johnson, A. et al. (2024)",
    description:
      "This paper presents innovative optimization techniques for training large-scale machine learning models. We demonstrate significant improvements in convergence speed and model accuracy across multiple benchmark datasets.",
    link: "https://arxiv.org",
    linkText: "Read on arXiv",
  },
  {
    id: "pub-2",
    title: "Data-Driven Insights in Scientific Research",
    authors: "Brown, M., Davis, K. et al. (2023)",
    description:
      "An empirical study examining how data-driven approaches can accelerate scientific discovery. We analyze patterns across multiple disciplines and propose a framework for integrating computational methods into traditional research workflows.",
    link: "https://arxiv.org",
    linkText: "Read on arXiv",
  },
  {
    id: "pub-3",
    title: "Ethical Considerations in AI Development",
    authors: "Wilson, R., Taylor, S. et al. (2023)",
    description:
      "A comprehensive review of ethical frameworks and their application to artificial intelligence development. This work synthesizes perspectives from philosophy, computer science, and social sciences to propose guidelines for responsible AI innovation.",
    link: "https://arxiv.org",
    linkText: "Read on arXiv",
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <SectionHeading>Publications</SectionHeading>

          <div className="flex flex-col gap-6">
            {publications.map((pub) => (
              <ExpandableCard
                key={pub.id}
                title={pub.title}
                subtitle={pub.authors}
                description={pub.description}
                link={pub.link}
                linkText={pub.linkText}
              />
            ))}
          </div>

          {/* Empty State Hint */}
          <div className="p-8 border border-dashed border-border rounded-lg text-center">
            <p className="text-muted-foreground">
              Latest publications and preprints featured here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
