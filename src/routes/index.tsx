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
  Palette,
  GitBranch,
  Github as GithubIcon,
  Terminal,
  Figma,
  Send,
  Globe,
  Boxes,
  Leaf,
  Wind,
  Layers,
  Check,
  Target,
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

const NAME = "Sandamini Gamage";

const skillCategories = [
  {
    title: "Frontend",
    Icon: Palette,
    items: [
      { name: "React", Icon: Atom },
      { name: "JavaScript", Icon: Code2 },
      { name: "HTML5", Icon: Globe },
      { name: "CSS3", Icon: Layers },
      { name: "Tailwind CSS", Icon: Wind },
      { name: "UI/UX Design", Icon: Figma },
    ],
  },
  {
    title: "Backend",
    Icon: Server,
    items: [
      { name: "Node.js", Icon: Boxes },
      { name: "Express", Icon: Send },
      { name: "Java", Icon: Coffee },
      { name: "Spring Boot", Icon: Leaf },
      { name: "MongoDB", Icon: Database },
      { name: "REST APIs", Icon: Server },
    ],
  },
  {
    title: "Tools",
    Icon: Terminal,
    items: [
      { name: "Git", Icon: GitBranch },
      { name: "GitHub", Icon: GithubIcon },
      { name: "VS Code", Icon: FileCode2 },
      { name: "Figma", Icon: Figma },
      { name: "Postman", Icon: Send },
    ],
  },
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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-bold text-lg">
          <span className="text-gradient">{"<YP/>"}</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
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
              I'm a 3rd year IT undergraduate at{" "}
              <span className="text-foreground font-medium">SLIIT</span>,
              currently in my 2nd semester, with a strong passion for{" "}
              <span className="text-foreground font-medium">Web Development</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">UI/UX Design</span>.
              I work across both frontend and backend development using the{" "}
              <span className="text-foreground font-medium">MERN Stack</span>{" "}
              (MongoDB, Express, React, Node.js) and{" "}
              <span className="text-foreground font-medium">Java Spring Boot</span>.
            </p>
            <p>
              What sets me apart is my ability to think like both a developer
              and a designer — I don't just write code; I craft experiences
              that users love. I've built several projects on GitHub, both
              individually and in teams, which taught me how to collaborate
              effectively, manage deadlines, and solve real-world problems.
              These projects reflect my curiosity and commitment to clean,
              maintainable code.
            </p>
            <p>
              Now, I'm actively looking for an internship where I can
              contribute to meaningful projects, learn from industry
              professionals, and take the next step in my journey toward
              becoming a full-stack developer.
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
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills & Expertise" title="Technologies I work with" />
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map(({ title, Icon: CatIcon, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center size-10 rounded-xl bg-primary/10 border border-primary/20">
                  <CatIcon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-medium hover:border-primary hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    <Icon className="size-3.5 text-primary group-hover:scale-110 transition-transform" />
                    {name}
                  </span>
                ))}
              </div>
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

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Journey" title="Experience" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
          <div className="space-y-8">
            {experiences.map((e, i) => (
              <div
                key={e.role}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:[direction:ltr]"}`}>
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 size-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="rounded-2xl border border-border bg-card p-6 card-hover [direction:ltr] text-left">
                    <div className="flex items-center gap-2 text-xs text-primary mb-2">
                      <Calendar className="size-3.5" /> {e.period}
                    </div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Briefcase className="size-4 text-primary" /> {e.role}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mt-1">{e.company}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
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
