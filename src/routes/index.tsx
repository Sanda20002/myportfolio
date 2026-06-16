import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Atom,
  Coffee,
  FileCode2,
  ArrowDown,
  GraduationCap,
  MapPin,
  Briefcase,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yasiru Perera — IT Undergraduate Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a 3rd year IT undergraduate at SLIIT — passionate about web development, building with Java, Spring Boot, React, Python, and MySQL.",
      },
      { property: "og:title", content: "Yasiru Perera — IT Undergraduate Portfolio" },
      {
        property: "og:description",
        content:
          "3rd year SLIIT IT undergraduate building modern web apps with React, Spring Boot, and more.",
      },
    ],
  }),
  component: Portfolio,
});

const NAME = "Yasiru Perera";

const skills = [
  { name: "Java", Icon: Coffee },
  { name: "Python", Icon: FileCode2 },
  { name: "React", Icon: Atom },
  { name: "Spring Boot", Icon: Server },
  { name: "MySQL", Icon: Database },
  { name: "JavaScript", Icon: Code2 },
];

const projects = [
  {
    title: "EduSphere — Learning Platform",
    description:
      "A full-stack online learning platform with course management, video lessons, and progress tracking.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "FinTrack — Expense Manager",
    description:
      "Personal finance tracker with charts, budgets, and category-based analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "MediConnect — Hospital System",
    description:
      "Hospital management system with patient records, appointments, and role-based access.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DevBlog — Markdown Blog",
    description:
      "A developer blog with markdown editor, tags, and syntax-highlighted code blocks.",
    tech: ["React", "TypeScript", "Vite"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "SmartParking — IoT Dashboard",
    description:
      "Real-time parking slot monitoring dashboard with sensor data visualization.",
    tech: ["Python", "Flask", "React", "MQTT"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Tech Company (Upcoming)",
    period: "2026 — Present",
    description:
      "Seeking internship opportunities in full-stack web development to apply my skills in real-world projects.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    description:
      "Built responsive websites and small full-stack apps for local clients using React, Spring Boot, and MySQL.",
  },
  {
    role: "Group Project Lead",
    company: "SLIIT — IT Project Module",
    period: "2025",
    description:
      "Led a team of 4 to design and ship a full-stack academic project, handling architecture, code reviews, and demos.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function useTheme() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);
  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };
  return { isDark, toggle };
}

function ThemeToggle({ className = "" }: { className?: string }) {
  const { isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`inline-flex items-center justify-center size-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors ${className}`}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-bold text-lg">
          <span className="text-gradient">{"<YP/>"}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-primary/40 px-4 py-1.5 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary mb-8">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Available for internships & freelance
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-gradient">{NAME}</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary font-medium">
          SLIIT — IT Undergraduate | 3rd Year
        </p>
        <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Passionate about web development and crafting clean, performant user
          experiences. I love turning ideas into real products using modern
          full-stack technologies.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform glow-shadow"
          >
            View My Work <ArrowDown className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-6 text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all">
            <Github className="size-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary hover:scale-110 transition-all">
            <Linkedin className="size-5" />
          </a>
          <a href="mailto:hello@example.com" className="hover:text-primary hover:scale-110 transition-all">
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About Me" title="A bit about me" />
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="rounded-2xl border border-border bg-card p-8 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="size-6 text-primary" />
              <span className="font-semibold">Education</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">BSc (Hons) in Information Technology</p>
            <p className="text-sm font-medium">SLIIT — 3rd Year</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Sri Lanka
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a third-year IT undergraduate at SLIIT with a strong focus on
              full-stack web development. I enjoy building products end-to-end —
              from designing clean UIs to architecting reliable backends.
            </p>
            <p>
              My core stack revolves around{" "}
              <span className="text-foreground font-medium">Java</span>,{" "}
              <span className="text-foreground font-medium">Python</span>,{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Spring Boot</span>{" "}
              and <span className="text-foreground font-medium">MySQL</span>. I
              love learning new tools, collaborating with teams, and shipping
              projects that actually solve problems.
            </p>
            <p>
              Outside of class, I'm usually working on side projects, exploring
              open source, or sharpening my problem-solving on coding platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Toolkit" title="Skills & Technologies" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <Icon className="size-10 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden card-hover"
            >
              <div className="relative h-40 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
                <span className="font-display text-6xl font-bold text-primary/30 group-hover:scale-110 transition-transform">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="size-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yasiru", href: "https://linkedin.com" },
    { Icon: Github, label: "GitHub", value: "github.com/yasiru", href: "https://github.com" },
    { Icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  ];
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" />
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          I'm open to internship opportunities, freelance projects, and
          collaborations. Feel free to reach out.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center card-hover"
            >
              <Icon className="size-7 text-primary" />
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground mt-1 break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {NAME}. Built with React & Tailwind.
    </footer>
  );
}
