import ExpandableCard from "@/components/ExpandableCard";
import SectionHeading from "@/components/SectionHeading";

/**
 * Projects Page
 * 
 * Design: Minimalist project showcase with expandable cards
 * - Grid layout with expandable project cards
 * - Each card shows title, subtitle, and expands to show description and link
 */

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Research Project Alpha",
    subtitle: "Machine Learning & Data Science",
    description:
      "An investigation into novel approaches for understanding complex datasets using advanced machine learning techniques. This project explores the intersection of theoretical computer science and practical applications in real-world scenarios.",
    link: "https://github.com",
    linkText: "View on GitHub",
  },
  {
    id: "project-2",
    title: "Technical Framework Beta",
    subtitle: "Software Architecture",
    description:
      "A comprehensive framework designed to streamline development workflows and improve code maintainability. Built with modern technologies and best practices, this project demonstrates scalable architecture principles.",
    link: "https://github.com",
    linkText: "View on GitHub",
  },
  {
    id: "project-3",
    title: "Data Analysis Tool",
    subtitle: "Python & Visualization",
    description:
      "An open-source tool for analyzing and visualizing complex datasets. Features interactive dashboards, statistical analysis capabilities, and export functionality for research and publication.",
    link: "https://github.com",
    linkText: "View on GitHub",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <SectionHeading>Projects</SectionHeading>

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ExpandableCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
                linkText={project.linkText}
              />
            ))}
          </div>

          {/* Empty State Hint */}
          <div className="p-8 border border-dashed border-border rounded-lg text-center">
            <p className="text-muted-foreground">
              More projects coming soon. Check back regularly for updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
