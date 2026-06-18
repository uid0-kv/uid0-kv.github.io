import SectionHeading from "@/components/SectionHeading";

/**
 * Fun Page
 * 
 * Design: Minimalist personal interests showcase
 * - Sections for hobbies, creative pursuits, and personal life
 * - Image placeholders and descriptive content
 */

interface Interest {
  id: string;
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    id: "interest-1",
    title: "Photography",
    description:
      "Exploring the world through the lens. I enjoy landscape and architectural photography, capturing moments that reveal hidden beauty in everyday scenes.",
  },
  {
    id: "interest-2",
    title: "Travel & Exploration",
    description:
      "Passionate about discovering new places, cultures, and perspectives. Travel fuels my curiosity and provides inspiration for both personal and professional work.",
  },
  {
    id: "interest-3",
    title: "Creative Writing",
    description:
      "Beyond academic writing, I enjoy crafting fiction and essays. Writing helps me process ideas and explore themes that fascinate me.",
  },
  {
    id: "interest-4",
    title: "Music & Sound Design",
    description:
      "An avid listener and occasional musician. I appreciate the intersection of art and technology in music production and sound design.",
  },
];

export default function Fun() {
  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <div>
            <SectionHeading>Fun & Personal</SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Beyond research and work, I'm passionate about exploring diverse interests that enrich my life and perspective. Here's a glimpse into what drives my curiosity outside the lab.
            </p>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest) => (
              <div key={interest.id} className="flex flex-col gap-4">
                {/* Image Placeholder */}
                <div className="w-full aspect-square rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">{interest.title}</p>
                    <p className="text-xs">Image Placeholder</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold font-serif text-foreground mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Additional Section */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-0.5 bg-accent" />
              <h2 className="text-3xl md:text-4xl font-semibold font-serif tracking-tight text-foreground">
                Let's Connect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interested in collaborating on research projects or creative ventures? I'm always open to discussing new ideas and exploring synergies with fellow researchers and creators.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out via email or social media. Whether you want to discuss research, share ideas, or just chat about shared interests, I'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
