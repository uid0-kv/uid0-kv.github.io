import ExpandableCard from "@/components/ExpandableCard";
import SectionHeading from "@/components/SectionHeading";

/**
 * Intersections Page
 * 
 * Design: Specialized blog section exploring intersections of diverse domains
 * - Expandable cards for cross-domain topics
 * - Focus on implications and novel insights from domain convergence
 */

interface Intersection {
  id: string;
  title: string;
  domains: string;
  description: string;
  link: string;
  linkText: string;
}

const intersections: Intersection[] = [
  {
    id: "intersection-1",
    title: "AI Ethics & Philosophy: Defining Moral Agency in Machines",
    domains: "Artificial Intelligence × Philosophy × Ethics",
    description:
      "An exploration of how philosophical frameworks can inform AI ethics and vice versa. This piece examines questions of moral agency, responsibility, and consciousness in the context of increasingly autonomous systems, bridging computer science with epistemology and metaphysics.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "intersection-2",
    title: "Neuroscience Meets Design: Cognitive Principles in UX",
    domains: "Neuroscience × Design × Psychology",
    description:
      "How insights from neuroscience and cognitive psychology can revolutionize user experience design. This article examines attention, memory, and decision-making processes to create more intuitive and effective interfaces, demonstrating the power of interdisciplinary collaboration.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "intersection-3",
    title: "Climate Science & Economics: Pricing the Priceless",
    domains: "Climate Science × Economics × Policy",
    description:
      "Exploring the intersection of climate science and economic theory to understand how we can better value environmental resources. Discusses carbon pricing, externalities, and the challenge of incorporating long-term environmental impacts into economic models.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "intersection-4",
    title: "Quantum Computing & Cryptography: The Future of Security",
    domains: "Quantum Physics × Computer Science × Cybersecurity",
    description:
      "An examination of how quantum computing threatens current cryptographic systems and the emerging field of post-quantum cryptography. Discusses the implications for data security, privacy, and the need for interdisciplinary approaches to quantum-safe systems.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "intersection-5",
    title: "Sociology of Technology: How Society Shapes Innovation",
    domains: "Sociology × Technology × History",
    description:
      "A critical examination of how social structures, power dynamics, and cultural values influence technological development. Explores the feedback loop between society and technology, challenging the notion of technological determinism.",
    link: "#",
    linkText: "Read Full Article",
  },
];

export default function Intersections() {
  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <div>
            <SectionHeading>Intersections</SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Exploring the convergence of diverse domains and the novel insights that emerge at their boundaries. These essays examine how ideas, methods, and perspectives from different fields can illuminate complex problems and drive innovation.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {intersections.map((item) => (
              <ExpandableCard
                key={item.id}
                title={item.title}
                subtitle={item.domains}
                description={item.description}
                link={item.link}
                linkText={item.linkText}
              />
            ))}
          </div>

          {/* Empty State Hint */}
          <div className="p-8 border border-dashed border-border rounded-lg text-center">
            <p className="text-muted-foreground">
              New intersectional essays exploring the frontiers of knowledge. Check back regularly for fresh perspectives.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
