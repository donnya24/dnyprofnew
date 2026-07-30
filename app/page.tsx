import { ProfileSection } from "@/components/profile-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { PortfolioSection } from "@/components/portfolio-section";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      
      {/* Footer */}
      <div className="border-3 border-primary bg-background p-4 text-center shadow-[4px_4px_0px_0px_var(--primary)] dark:shadow-[4px_4px_0px_0px_var(--primary)]">
        <p className="text-foreground font-bold text-sm md:text-base">
          © 2026 Halo Andika. Dibangun dengan ❤️ dan Next.js
        </p>
      </div>
    </>
  );
}