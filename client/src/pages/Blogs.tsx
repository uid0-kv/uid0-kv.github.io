import ExpandableCard from "@/components/ExpandableCard";
import SectionHeading from "@/components/SectionHeading";

/**
 * Blogs Page
 * 
 * Design: Minimalist blog showcase with expandable cards
 * - Grid layout with expandable blog cards
 * - Each card shows title, date, and expands to show excerpt and link
 */

interface Blog {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  linkText: string;
}

const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "The Future of Artificial Intelligence",
    date: "June 2024",
    description:
      "Exploring the trajectory of AI development and its implications for society. This piece examines current trends, potential challenges, and opportunities for responsible innovation in the field of artificial intelligence.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "blog-2",
    title: "Reflections on Academic Research",
    date: "May 2024",
    description:
      "A thoughtful exploration of the research process, from formulating questions to publishing findings. Discusses the importance of rigor, collaboration, and communication in advancing human knowledge.",
    link: "#",
    linkText: "Read Full Article",
  },
  {
    id: "blog-3",
    title: "Building Better Tools for Data Analysis",
    date: "April 2024",
    description:
      "An examination of how well-designed tools can accelerate research and improve outcomes. Covers best practices in software design for scientific computing and the importance of user-centered development.",
    link: "#",
    linkText: "Read Full Article",
  },
];

export default function Blogs() {
  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <SectionHeading>Blogs</SectionHeading>

          <div className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <ExpandableCard
                key={blog.id}
                title={blog.title}
                subtitle={blog.date}
                description={blog.description}
                link={blog.link}
                linkText={blog.linkText}
              />
            ))}
          </div>

          {/* Empty State Hint */}
          <div className="p-8 border border-dashed border-border rounded-lg text-center">
            <p className="text-muted-foreground">
              New articles published regularly. Subscribe for updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
