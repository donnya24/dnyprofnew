export function SkillsSection() {
  const skills = [
    "React", "Next.js", "TypeScript", 
    "Tailwind CSS", "Node.js", "GraphQL", 
    "PostgreSQL", "Figma", "Git", "Docker"
  ];

  return (
    <section className="mb-8">
      <div className="border-3 border-primary bg-card shadow-[6px_6px_0px_0px_var(--primary)] dark:shadow-[6px_6px_0px_0px_var(--primary)] p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-foreground border-b-3 border-primary pb-2 mb-4">
          Keahlian
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-3 border-primary bg-accent px-4 py-2 text-foreground font-bold shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}