import { Github, Linkedin, Mail, MapPin, Phone, Globe } from "lucide-react";

export function ProfileSection() {
  return (
    <section className="mb-8">
      {/* Profile Card - Neo Brutalism Style */}
      <div className="border-3 border-primary bg-card shadow-[6px_6px_0px_0px_var(--primary)] dark:shadow-[6px_6px_0px_0px_var(--primary)] p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Avatar */}
          <div className="border-3 border-primary overflow-hidden w-32 h-32 md:w-40 md:h-40 flex-shrink-0 shadow-[4px_4px_0px_0px_var(--primary)] dark:shadow-[4px_4px_0px_0px_var(--primary)]">
            <div className="w-full h-full bg-primary flex items-center justify-center text-4xl md:text-5xl font-black text-primary-foreground">
              A
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
              Andika
            </h1>
            <p className="text-xl md:text-2xl font-bold text-primary mt-1 border-b-3 border-primary inline-block pb-1">
              Web Developer & Designer
            </p>
            <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-lg">
              Membangun solusi digital dengan kode yang bersih dan desain yang
              berani. Berpengalaman dalam pengembangan web modern dan
              antarmuka pengguna yang intuitif.
            </p>

            {/* Contact Icons */}
            <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="border-2 border-primary bg-background p-2 shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--primary)] transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="border-2 border-primary bg-background p-2 shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--primary)] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="border-2 border-primary bg-background p-2 shadow-[3px_3px_0px_0px_var(--primary)] dark:shadow-[3px_3px_0px_0px_var(--primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_var(--primary)] transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid - Location & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-3 border-primary bg-accent p-4 shadow-[4px_4px_0px_0px_var(--primary)] dark:shadow-[4px_4px_0px_0px_var(--primary)] flex items-center gap-3">
          <MapPin className="w-6 h-6 text-foreground flex-shrink-0" />
          <span className="text-foreground font-bold">Indonesia</span>
        </div>
        <div className="border-3 border-primary bg-accent p-4 shadow-[4px_4px_0px_0px_var(--primary)] dark:shadow-[4px_4px_0px_0px_var(--primary)] flex items-center gap-3">
          <Phone className="w-6 h-6 text-foreground flex-shrink-0" />
          <span className="text-foreground font-bold">+62 812-3456-7890</span>
        </div>
      </div>
    </section>
  );
}