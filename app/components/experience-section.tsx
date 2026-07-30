export function ExperienceSection() {
  const experiences = [
    {
      title: "Web Developer",
      company: "PT Teknologi Maju",
      period: "2022 - Sekarang",
      description: "Mengembangkan aplikasi web dengan React, Next.js, dan TypeScript. Bertanggung jawab atas arsitektur frontend dan optimasi performa."
    },
    {
      title: "UI/UX Designer",
      company: "Studio Kreatif",
      period: "2020 - 2022",
      description: "Mendesain antarmuka pengguna untuk berbagai proyek digital. Berkolaborasi dengan tim pengembang untuk implementasi desain."
    }
  ];

  return (
    <section className="mb-8">
      <div className="border-3 border-primary bg-card shadow-[6px_6px_0px_0px_var(--primary)] dark:shadow-[6px_6px_0px_0px_var(--primary)] p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-black text-foreground border-b-3 border-primary pb-2 mb-4">
          Pengalaman
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border-2 border-primary p-4 bg-background shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)]"
            >
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-primary font-semibold">{exp.company}</p>
              <p className="text-muted-foreground text-sm">{exp.period}</p>
              <p className="text-foreground mt-2 text-sm md:text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}