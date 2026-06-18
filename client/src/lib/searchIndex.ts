import { SearchResult } from "@/contexts/SearchContext";

// All searchable content
const allContent = [
  // Projects
  {
    id: "project-1",
    type: "project" as const,
    title: "Research Project Alpha",
    subtitle: "Machine Learning & Data Science",
    description:
      "An investigation into novel approaches for understanding complex datasets using advanced machine learning techniques. This project explores the intersection of theoretical computer science and practical applications in real-world scenarios.",
    link: "/projects",
  },
  {
    id: "project-2",
    type: "project" as const,
    title: "Technical Framework Beta",
    subtitle: "Software Architecture",
    description:
      "A comprehensive framework designed to streamline development workflows and improve code maintainability. Built with modern technologies and best practices, this project demonstrates scalable architecture principles.",
    link: "/projects",
  },
  {
    id: "project-3",
    type: "project" as const,
    title: "Data Analysis Tool",
    subtitle: "Python & Visualization",
    description:
      "An open-source tool for analyzing and visualizing complex datasets. Features interactive dashboards, statistical analysis capabilities, and export functionality for research and publication.",
    link: "/projects",
  },
  // Blogs
  {
    id: "blog-1",
    type: "blog" as const,
    title: "The Future of Artificial Intelligence",
    subtitle: "June 2024",
    description:
      "Exploring the trajectory of AI development and its implications for society. This piece examines current trends, potential challenges, and opportunities for responsible innovation in the field of artificial intelligence.",
    link: "/blogs",
  },
  {
    id: "blog-2",
    type: "blog" as const,
    title: "Reflections on Academic Research",
    subtitle: "May 2024",
    description:
      "A thoughtful exploration of the research process, from formulating questions to publishing findings. Discusses the importance of rigor, collaboration, and communication in advancing human knowledge.",
    link: "/blogs",
  },
  {
    id: "blog-3",
    type: "blog" as const,
    title: "Building Better Tools for Data Analysis",
    subtitle: "April 2024",
    description:
      "An examination of how well-designed tools can accelerate research and improve outcomes. Covers best practices in software design for scientific computing and the importance of user-centered development.",
    link: "/blogs",
  },
  // Publications
  {
    id: "pub-1",
    type: "publication" as const,
    title: "Novel Approaches to Machine Learning Optimization",
    subtitle: "Smith, J., Johnson, A. et al. (2024)",
    description:
      "This paper presents innovative optimization techniques for training large-scale machine learning models. We demonstrate significant improvements in convergence speed and model accuracy across multiple benchmark datasets.",
    link: "/publications",
  },
  {
    id: "pub-2",
    type: "publication" as const,
    title: "Data-Driven Insights in Scientific Research",
    subtitle: "Brown, M., Davis, K. et al. (2023)",
    description:
      "An empirical study examining how data-driven approaches can accelerate scientific discovery. We analyze patterns across multiple disciplines and propose a framework for integrating computational methods into traditional research workflows.",
    link: "/publications",
  },
  {
    id: "pub-3",
    type: "publication" as const,
    title: "Ethical Considerations in AI Development",
    subtitle: "Wilson, R., Taylor, S. et al. (2023)",
    description:
      "A comprehensive review of ethical frameworks and their application to artificial intelligence development. This work synthesizes perspectives from philosophy, computer science, and social sciences to propose guidelines for responsible AI innovation.",
    link: "/publications",
  },
  // Intersections
  {
    id: "intersection-1",
    type: "intersection" as const,
    title: "AI Ethics & Philosophy: Defining Moral Agency in Machines",
    subtitle: "Artificial Intelligence × Philosophy × Ethics",
    description:
      "An exploration of how philosophical frameworks can inform AI ethics and vice versa. This piece examines questions of moral agency, responsibility, and consciousness in the context of increasingly autonomous systems, bridging computer science with epistemology and metaphysics.",
    link: "/intersections",
  },
  {
    id: "intersection-2",
    type: "intersection" as const,
    title: "Neuroscience Meets Design: Cognitive Principles in UX",
    subtitle: "Neuroscience × Design × Psychology",
    description:
      "How insights from neuroscience and cognitive psychology can revolutionize user experience design. This article examines attention, memory, and decision-making processes to create more intuitive and effective interfaces, demonstrating the power of interdisciplinary collaboration.",
    link: "/intersections",
  },
  {
    id: "intersection-3",
    type: "intersection" as const,
    title: "Climate Science & Economics: Pricing the Priceless",
    subtitle: "Climate Science × Economics × Policy",
    description:
      "Exploring the intersection of climate science and economic theory to understand how we can better value environmental resources. Discusses carbon pricing, externalities, and the challenge of incorporating long-term environmental impacts into economic models.",
    link: "/intersections",
  },
  {
    id: "intersection-4",
    type: "intersection" as const,
    title: "Quantum Computing & Cryptography: The Future of Security",
    subtitle: "Quantum Physics × Computer Science × Cybersecurity",
    description:
      "An examination of how quantum computing threatens current cryptographic systems and the emerging field of post-quantum cryptography. Discusses the implications for data security, privacy, and the need for interdisciplinary approaches to quantum-safe systems.",
    link: "/intersections",
  },
  {
    id: "intersection-5",
    type: "intersection" as const,
    title: "Sociology of Technology: How Society Shapes Innovation",
    subtitle: "Sociology × Technology × History",
    description:
      "A critical examination of how social structures, power dynamics, and cultural values influence technological development. Explores the feedback loop between society and technology, challenging the notion of technological determinism.",
    link: "/intersections",
  },
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();

  return allContent.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const subtitleMatch = item.subtitle?.toLowerCase().includes(lowerQuery);
    const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);

    return titleMatch || subtitleMatch || descriptionMatch;
  });
}

export function getContentByType(type: string): SearchResult[] {
  return allContent.filter((item) => item.type === type);
}
