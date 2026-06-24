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
  User,
  Phone,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandamini Gamage — IT Undergraduate Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a 3rd year IT undergraduate at SLIIT — passionate about web development, UI/UX design, and building with the MERN Stack, Java Spring Boot, and modern full-stack technologies.",
      },
      { property: "og:title", content: "Sandamini Gamage — IT Undergraduate Portfolio" },
      {
        property: "og:description",
        content:
          "3rd year SLIIT IT undergraduate building modern web apps with React, Spring Boot, Node.js, and more.",
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
    title: "UniHub",
    subtitle: "Peer-to-Peer Learning Platform",
    description:
      "A modern, full-stack learning platform combining Facebook-like social interaction with YouTube-style video learning. Empowers university students to collaborate through live streaming, resource sharing, quizzes, and community discussions. Production ready with 50+ API endpoints.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Node.js"],
    github: "https://github.com/Sanda20002/UNIHUB",
    demo: "Coming Soon",
    featured: true,
    accent: "#3B82F6",
    features: [
      "Live streaming with RTMP/OBS",
      "Study library with file uploads",
      "Quiz system with auto-scoring",
      "Real-time chat",
      "Notification system",
      "OTP authentication",
      "Dark/Light mode",
    ],
  },
  {
    title: "Library Book Tracking System",
    description:
      "A full-stack web application for managing library books, tracking borrow/return transactions, and maintaining inventory records with user authentication using JWT.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS3", "JWT"],
    github: "https://github.com/Sanda20002/Library-Book-Tracking-System",
    demo: "Coming Soon",
    accent: "#10B981",
    features: [
      "Book inventory management (CRUD)",
      "Borrow and return tracking",
      "User authentication (Login/Register)",
      "Transaction history",
      "Search and filter books",
      "Responsive design",
    ],
  },
  {
    title: "Smart Campus Operations Hub",
    description:
      "A complete web-based system for managing facility and asset bookings and maintenance/incident handling for a university campus. Production ready with Spring Boot backend and React frontend.",
    tech: ["Spring Boot 3.2", "Java 17", "MongoDB", "React 18", "OAuth2", "JWT", "Zustand"],
    github: "https://github.com/Sanda20002/smartspace",
    demo: "Coming Soon",
    featured: true,
    accent: "#F59E0B",
    features: [
      "Facilities & Assets catalogue",
      "Booking management with conflict prevention",
      "Maintenance & Incident ticketing",
      "Real-time notifications",
      "Google OAuth2 authentication",
      "Role-based access (USER/ADMIN)",
    ],
  },
  {
    title: "FarmNex",
    subtitle: "Smart Farm Management System",
    description:
      "A full-stack MERN application integrating IoT sensors for soil moisture monitoring. Features secure JWT authentication, Stripe payment system, and OTP verification with email-based notifications.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe", "IoT Sensors"],
    github: "https://github.com/Sanda20002/FarmNex",
    demo: "Coming Soon",
    accent: "#22C55E",
    features: [
      "IoT sensor integration for soil moisture monitoring",
      "JWT authentication",
      "Stripe payment system",
      "OTP verification",
      "Email notifications",
      "Real-time data monitoring",
    ],
  },
  {
    title: "Online Property Sales System",
    description:
      "A comprehensive system for managing rental property administration and enhancing tenant communication. Built with PHP and MySQL.",
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
    github: "https://github.com/Sanda20002/Online-Property-Sales_System",
    demo: "Coming Soon",
    accent: "#8B5CF6",
    features: [
      "Property listings management",
      "Tenant communication system",
      "Rental administration",
      "User authentication",
      "Property search and filtering",
    ],
  },
  {
    title: "Question Bank System",
    description:
      "A Java-based system for managing and organizing question banks for educational purposes. Built with Eclipse and Java EE technologies.",
    tech: ["Java", "J2EE", "Eclipse", "Servlet", "JSP"],
    github: "https://github.com/Sanda20002/QuestionBank2",
    demo: "Coming Soon",
    accent: "#EF4444",
    features: [
      "Question creation and management",
      "Category organization",
      "Search and filter questions",
      "Educational assessment support",
    ],
  },
];

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "React 18": "#61DAFB",
  "React 19": "#61DAFB",
  "Next.js": "#000000",
  "Next.js 16": "#000000",
  "Spring Boot": "#6DB33F",
  "Spring Boot 3.2": "#6DB33F",
  "Node.js": "#339933",
  MongoDB: "#47A248",
  Java: "#007396",
  "Java 17": "#007396",
  J2EE: "#007396",
  Servlet: "#007396",
  JSP: "#007396",
  PHP: "#777BB4",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  PostgreSQL: "#336791",
  Supabase: "#3ECF8E",
  Express: "#000000",
  "Express.js": "#000000",
  JWT: "#000000",
  OAuth2: "#000000",
  Stripe: "#635BFF",
  MySQL: "#4479A1",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Eclipse: "#2C2255",
  Zustand: "#000000",
  "IoT Sensors": "#00d4ff",
};

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
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isDemoReady = project.demo !== "Coming Soon";

  return (
    <article
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
      style={{ borderColor: `${project.accent}20` }}
    >
      <div
        className="relative h-44 flex flex-col justify-center px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent}20 0%, ${project.accent}10 50%, transparent 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at top right, ${project.accent}, transparent 60%)`,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold leading-tight">
                <span style={{ color: project.accent }}>{project.title}</span>
              </h3>
              {project.subtitle && (
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 text-amber-400 px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                <Target className="size-3" /> Featured
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Project #{String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => {
            const color = techColors[t] || "#00d4ff";
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold border border-white/10 hover:scale-105 transition-transform"
                style={{
                  backgroundColor: `${color}15`,
                  color,
                  borderColor: `${color}25`,
                }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {t}
              </span>
            );
          })}
        </div>

        <div className="border-t border-border/50 pt-4 mb-4 flex-1">
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 mt-0.5 shrink-0" style={{ color: project.accent }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg bg-primary/10 text-primary px-3 py-2 text-xs font-semibold hover:bg-primary/20 transition-colors"
          >
            <Github className="size-4" /> GitHub
          </a>
          <button
            disabled={!isDemoReady}
            className={`inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              isDemoReady
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
            }`}
          >
            <ExternalLink className="size-4" /> {isDemoReady ? "Live Demo" : "Coming Soon"}
          </button>
        </div>
      </div>
    </article>
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
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const details = [
    { Icon: User, label: "Name", value: "G.P.G.Hasini Sandamini Gamage" },
    { Icon: Mail, label: "Email", value: "sandaminigamage12@gmail.com", href: "mailto:sandaminigamage12@gmail.com" },
    { Icon: Phone, label: "Phone", value: "076-2098904", href: "tel:076-2098904" },
    { Icon: MapPin, label: "Address", value: "\"Sandamina\", Ellagama, Diyathalawa." },
  ];

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's Connect" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column — Contact Form */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a question or just want to say hi? I'll try my best to get back to you!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-[#12123a]/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-[#12123a]/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-[#12123a]/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-[#12123a]/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.01] glow-shadow"
              >
                <Send className="size-4" /> Send Message
              </button>
              {submitted && (
                <p className="text-center text-sm text-primary">Thanks! Your message has been sent.</p>
              )}
            </form>
          </div>

          {/* Right Column — Personal Details */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-[#12123a] p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {details.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="inline-flex shrink-0 items-center justify-center size-10 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground break-words">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.01] glow-shadow"
            >
              <Download className="size-5" /> Download CV
            </a>
          </div>
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
