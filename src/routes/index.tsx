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
  GraduationCap,
  MapPin,
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
  User,
  Phone,
  Download,
  Star,
  Sparkles,
} from "lucide-react";

import { AnimatedBackground } from "../components/AnimatedBackground";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { sendContactMessage } from "../lib/api/contact.functions";
import { CONTACT_EMAIL as EMAIL, buildContactMailtoHref } from "../lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasini Sandamini — IT Undergraduate Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hasini Sandamini, a 3rd year IT undergraduate at SLIIT — full-stack web development with React, Spring Boot, Node.js, and modern technologies.",
      },
      { property: "og:title", content: "Hasini Sandamini — IT Undergraduate Portfolio" },
      {
        property: "og:description",
        content:
          "3rd year SLIIT IT undergraduate building modern web apps with React, Spring Boot, Node.js, and more.",
      },
    ],
  }),
  component: Portfolio,
});

const NAME = "Hasini Sandamini";
const PHOTO = "https://i.postimg.cc/rwp88rQ7/Whats-App-Image-2026-06-24-at-22-02-34.jpg";
const GITHUB_URL = "https://github.com/Sanda20002";
const LINKEDIN_URL = "https://www.linkedin.com/in/hasini-sandamini-47bb513a5";
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
      { name: "REST APIs", Icon: Server },
    ],
  },
  {
    title: "Database",
    Icon: Database,
    items: [
      { name: "MongoDB", Icon: Database },
      { name: "MySQL", Icon: Database },
      { name: "PostgreSQL", Icon: Database },
    ],
  },
  {
    title: "Mobile Development",
    Icon: Phone,
    items: [
      { name: "Android", Icon: Phone },
      { name: "Java", Icon: Coffee },
      { name: "Kotlin", Icon: Phone },
    ],
  },
  {
    title: "Tools & Technologies",
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

// Additional skill categories requested
const extraSkillCategories = [
  {
    title: "Languages",
    Icon: Code2,
    items: [
      { name: "JavaScript", Icon: Code2 },
      { name: "TypeScript", Icon: Code2 },
      { name: "PHP", Icon: Code2 },
      { name: "Java", Icon: Coffee },
      { name: "Python", Icon: Code2 },
      { name: "HTML", Icon: Globe },
      { name: "CSS", Icon: Layers },
    ],
  },
  {
    title: "Software Engineering",
    Icon: Layers,
    items: [
      { name: "OOP", Icon: Check },
      { name: "MVC Architecture", Icon: MapPin },
      { name: "SDLC", Icon: FileCode2 },
      { name: "Design Patterns", Icon: Sparkles },
      { name: "Data Structures & Algorithms", Icon: Atom },
    ],
  },
  {
    title: "Professional Skills",
    Icon: Star,
    items: [
      { name: "Adaptability - 95%", Icon: Star },
      { name: "Teamwork - 95%", Icon: Star },
      { name: "Innovation - 90%", Icon: Star },
      { name: "Creativity - 85%", Icon: Star },
      { name: "Time Management - 85%", Icon: Star },
    ],
  },
];

const FILTERS = [
  "ALL",
  "REACT / NODE.JS",
  "SPRING BOOT",
  "MERN STACK",
  "JAVA",
  "PHP / DATABASES",
  "MOBILE (ANDROID)",
] as const;
type Filter = (typeof FILTERS)[number];

type Project = {
  title: string;
  subtitle?: string;
  category: Exclude<Filter, "ALL">;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
  accent: string;
  icon?: string;
  image?: string;
  features?: string[];
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "UniHub",
    subtitle: "Peer-to-Peer Learning Platform",
    category: "REACT / NODE.JS",
    featured: true,
    icon: "🎓",
    image: "/unihub.png",
    description:
      "A full-stack educational platform that combines social learning, live streaming, resource sharing, quizzes, and community collaboration for university students.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    features: [
      "Live learning with streaming & interactive Q&A",
      "Study library to upload, share & search study materials",
      "Quiz system to create & attempt quizzes with auto scoring",
      "Community study groups, discussions, & real-time chat",
      "Smart features like dark mode, notifications & role-based access",
    ],
    github: "https://github.com/Sanda20002/UNIHUB",
    accent: "#3B82F6",
    demoUrl: "Not applicable",
  },
  {
    title: "Library Book Tracking System",
    subtitle: "Library Catalog & Borrow Tracking",
    category: "MERN STACK",
    icon: "📚",
    image: "/library_book_tracking.png",
    description:
      "A full-stack web application designed for managing and tracking library books efficiently, featuring secure catalog administration, transaction logs, and real-time availability tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Add, view, update, delete, and search library books",
      "Track borrowing records and availability status",
      "Secure & reliable data protection with MongoDB Atlas",
      "Responsive design that works on all devices",
      "Fast, efficient and smooth performance",
    ],
    github: "https://github.com/Sanda20002/Library-Book-Tracking-System",
    accent: "#10B981",
    demoUrl: "Not applicable",
  },
  {
    title: "SmartSpace",
    subtitle: "Smart Campus Operations Hub",
    category: "SPRING BOOT",
    featured: true,
    icon: "🏫",
    image: "/smartspace.png",
    description:
      "A comprehensive platform for managing campus resources, facility bookings, maintenance operations, and real-time communications with role-based access control.",
    tech: ["Spring Boot", "Java 17", "MongoDB", "React", "OAuth2", "JWT"],
    features: [
      "Resource catalog with real-time availability",
      "Easy resource booking with conflict detection & approval workflows",
      "Maintenance ticketing with priority, status tracking, and comments",
      "Real-time notifications for booking approvals & ticket updates",
      "Google OAuth 2.0 & JWT role-based access control and data protection",
    ],
    github: "https://github.com/Sanda20002/PAF_SmartSpace",
    accent: "#F59E0B",
    demoUrl: "Not applicable",
  },
  {
    title: "FarmNex",
    subtitle: "Smart Farm Management Platform",
    category: "MERN STACK",
    featured: true,
    icon: "🌱",
    image: "/farmnex.png",
    description:
      "A full-stack, IoT-integrated agricultural management system designed for Sri Lankan farmers. Connecting farms, technology, and communities for a smarter future.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "IoT", "Tailwind CSS"],
    features: [
      "E-commerce & Order Management",
      "Crop & Livestock Management",
      "IoT Soil Moisture Monitoring",
      "AI Chatbot & Smart Recommendations",
      "Training & Learning Portal",
      "Reports, Analytics & PDF/Excel Export",
      "Notifications & Email Alerts",
      "Secure Authentication & Role Management",
    ],
    github: "https://github.com/Sanda20002/FarmNex",
    accent: "#22C55E",
    demoUrl: "Not applicable",
  },
  {
    title: "Online Property Sales System",
    subtitle: "Rental & Property Administration",
    category: "PHP / DATABASES",
    icon: "🏠",
    image: "/online_property_sales.png",
    description:
      "A comprehensive web application for managing property listings, tenant communication, and rental administration. Connecting property owners and tenants seamlessly.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Comprehensive property management system",
      "Enhanced tenant-landlord communication",
      "Streamlined rental administration",
      "Secure user authentication & authorization",
      "Advanced property search & filtering",
      "Responsive design for all devices",
    ],
    github: "https://github.com/Sanda20002/Online-Property-Sales_System",
    accent: "#8B5CF6",
    demoUrl: "Not applicable",
  },
  {
    title: "Question Bank System",
    subtitle: "Online Examination System",
    category: "JAVA",
    icon: "📝",
    image: "/question_bank.png",
    description:
      "A web-based system for creating, managing, and grading online examinations with secure authentication and real-time results.",
    tech: ["Java", "J2EE", "Servlet", "JSP", "MySQL", "JDBC", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Built exam creation and management (CRUD operations)",
      "Implemented student registration and secure login",
      "Added multiple-choice question support with auto-grading",
      "Created result analytics and performance reports",
      "Applied OOP concepts including inheritance and encapsulation",
      "Connected application with database using JDBC",
      "Designed responsive UI using HTML, CSS, and JavaScript",
    ],
    github: "https://github.com/Sanda20002/QuestionBank",
    accent: "#EF4444",
    demoUrl: "Not applicable",
  },
  {
    title: "GlowMind",
    subtitle: "Daily Wellness & Mood Tracker",
    category: "MOBILE (ANDROID)",
    description:
      "A native Android application designed to help users establish healthy habits, journal daily moods, and track overall wellness.",
    tech: ["Kotlin", "Android", "Room", "Material Design"],
    github: "https://github.com/Sanda20002/HabitTracker",
    accent: "#00d4ff",
    icon: "📱",
    image: "/glowmind.png",
    features: [
      "Onboarding with step-by-step introduction",
      "Authentication with credential caching",
      "Comprehensive health profile with BMI calculator",
      "Interactive habit tracker with circular progress",
      "Mood journal with emoji logging and calendar view",
      "Smart hydration reminders with background alarms",
      "Home screen widget showing daily progress",
    ],
    demoUrl: "Not applicable",
  },
];

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#8b5cf6",
  "Spring Boot": "#6DB33F",
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
  Express: "#9CA3AF",
  JWT: "#9CA3AF",
  OAuth2: "#9CA3AF",
  Stripe: "#635BFF",
  MySQL: "#4479A1",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Eclipse: "#2C2255",
  IoT: "#00d4ff",
  Kotlin: "#7F52FF",
  Android: "#3DDC84",
  Room: "#4285F4",
  "Material Design": "#FF1744",
  JDBC: "#e48b11",
};

type ExperienceItem = {
  role: string;
  project: string;
  year: string;
  focus: string;
  summary: string;
  contributions: string[];
  tech: string[];
  github: string;
};

const fullStackExperience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    project: "UniHub - Peer-to-Peer Learning Platform",
    year: "2026",
    focus: "Live Streaming, Resource Sharing, Quiz System, Real-time Chat, Notification Module",
    summary:
      "Worked on a production-ready learning platform built to empower university students through live streaming, resource sharing, quizzes, and community discussions.",
    contributions: [
      "Implemented live streaming with RTMP/OBS integration",
      "Built study library with file uploads (PDF, PPT, Video, Audio)",
      "Added quiz system with auto-scoring and analytics",
      "Implemented real-time chat with optimistic UI",
      "Built notification system with email reminders",
      "Created REST APIs using Next.js API Routes",
    ],
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Sanda20002/UNIHUB",
  },
  {
    role: "Full-Stack Developer",
    project: "Smart Campus Operations Hub",
    year: "2026",
    focus: "Facility Booking, Maintenance Ticketing, OAuth2.0 Authentication, Role Management",
    summary:
      "Worked on a production-inspired university management platform built to streamline campus operations through role-based access, secure authentication, and notification workflows.",
    contributions: [
      "Implemented role-based access control (USER/ADMIN)",
      "Added Google OAuth2.0 authentication with JWT",
      "Built facility booking management with conflict prevention",
      "Created maintenance ticketing system with comments",
      "Implemented notification module with read/unread status",
      "Built REST APIs using Spring Boot",
    ],
    tech: ["Spring Boot", "Java 17", "MongoDB", "React", "OAuth2.0", "JWT"],
    github: "https://github.com/Sanda20002/PAF_SmartSpace",
  },
  {
    role: "Full-Stack / IoT Developer",
    project: "FarmNex - Smart Farm Management System",
    year: "2025",
    focus: "IoT Integration, Payment Processing, OTP Verification, Notification Module",
    summary:
      "Worked on a smart farming platform designed to support data-driven agriculture and farm management.",
    contributions: [
      "Integrated IoT sensors for soil moisture monitoring",
      "Implemented JWT authentication and OTP verification",
      "Added Stripe payment system",
      "Built inventory, order, and smart farm modules",
      "Supported Gmail-based notification flows",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe", "IoT"],
    github: "https://github.com/Sanda20002/FarmNex",
  },
  {
    role: "Full-Stack Developer",
    project: "Library Book Tracking System",
    year: "2025 (Individual Project)",
    focus: "Book Management, Borrow/Return Tracking, User Authentication",
    summary: "Built a full-stack library management application with secure JWT authentication.",
    contributions: [
      "Built book inventory management (CRUD operations)",
      "Implemented borrow and return tracking",
      "Added user authentication with JWT",
      "Created transaction history for each user",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "CSS3"],
    github: "https://github.com/Sanda20002/Library-Book-Tracking-System",
  },
  {
    role: "Full-Stack Developer",
    project: "Online Property Sales System",
    year: "2024",
    focus: "Property Management, Tenant Communication, Rental Administration",
    summary:
      "Developed a comprehensive system for managing rental property administration and enhancing tenant communication.",
    contributions: [
      "Built property listings management",
      "Implemented tenant communication system",
      "Added rental administration features",
      "Created user authentication and property search",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Sanda20002/Online-Property-Sales_System",
  },
];

const javaExperience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    project: "Online Exam Management System",
    year: "2025",
    focus: "Exam Creation, Student Management, Auto-Grading, Result Analytics",
    summary:
      "Developed a web-based system for creating, managing, and grading online examinations with secure authentication and real-time results.",
    contributions: [
      "Built exam creation and management (CRUD operations)",
      "Implemented student registration and secure login",
      "Added multiple-choice question support with auto-grading",
      "Created result analytics and performance reports",
      "Applied OOP concepts including inheritance and encapsulation",
      "Connected application with database using JDBC",
      "Designed responsive UI using HTML, CSS, and JavaScript",
    ],
    tech: ["Java", "J2EE", "Servlet", "JSP", "MySQL", "JDBC", "HTML5", "CSS3", "JavaScript"],
  },
];

const mobileExperience: ExperienceItem[] = [
  {
    role: "Mobile App Developer",
    project: "GlowMind - Daily Wellness & Mood Tracker",
    year: "2026",
    focus: "Habit Tracking, Mood Journaling, Hydration Reminders, AlarmManager, Room Database",
    summary:
      "Developed a native Android application designed to help users establish healthy habits, journal daily moods, and maintain mental and physical wellness.",
    contributions: [
      "Implemented interactive habit tracker with circular progress",
      "Built mood journal with emoji logging and calendar view",
      "Designed smart hydration reminders using AlarmManager & BroadcastReceiver",
      "Created home screen widget showing daily progress",
      "Developed comprehensive health profile with BMI calculator",
      "Implemented onboarding flow and credential caching",
    ],
    tech: ["Kotlin", "Android", "Room", "Material Design"],
    github: "https://github.com/Sanda20002/HabitTracker",
  },
];

function Portfolio() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

// Simple scroll reveal hook (adds 'revealed' class)
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// Attach reveal globally

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
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="mx-auto max-w-7xl flex items-center justify-between gap-4 px-6 py-3">
        <a href="#home" className="font-display font-bold text-lg shrink-0">
          <span className="text-gradient">{"<HS/>"}</span>
        </a>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary text-primary px-4 py-1.5 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download className="size-3.5" /> Download CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const titles = [
    "Web Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  function useTyping(words: string[], speed = 80, pause = 1800) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
      let timeout: any;
      const word = words[index % words.length];

      if (!deleting) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), speed);
        if (text === word) timeout = setTimeout(() => setDeleting(true), pause);
      } else {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), speed / 1.5);
        if (text === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }

      return () => clearTimeout(timeout);
    }, [text, deleting, index]);

    return text;
  }

  const typed = useTyping(titles);
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center reveal">
        {/* Photo */}
        <div className="relative mx-auto md:mx-0 flex items-center">
          <ProfilePhoto imageSrc={PHOTO} alt={NAME} />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary mb-5">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for internships & freelance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">{NAME}</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-medium">
            SLIIT — IT Undergraduate | 3rd Year
          </p>
          <p className="mt-5 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate about web development and crafting clean, performant user
            experiences. I love turning ideas into real products using modern
            full-stack technologies.
          </p>
          <div className="mt-4 text-primary font-medium flex items-center gap-2 md:justify-start justify-center">
            <span className="typing">{typed}</span>
            <span className="cursor">|</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform glow-shadow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/G%20P%20G%20H%20S%20GAMAGE%20-%20CV.pdf"
              download="G P G H S GAMAGE - CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/20 hover:scale-105 transition-all"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start gap-5 text-muted-foreground">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary hover:scale-110 transition-all">
              <Github className="size-5" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="size-5" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-primary hover:scale-110 transition-all">
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
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
            </p>
            <p>
              Now, I'm actively looking for an internship where I can
              contribute to meaningful projects, learn from industry
              professionals, and take the next step toward becoming a
              full-stack developer.
            </p>
            <div className="mt-6">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Major Projects", value: "6+" },
                  { label: "Technologies", value: "5+" },
                  { label: "Dedication", value: "100%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const leftSkillCards = [
    {
      title: skillCategories[0].title,
      Icon: skillCategories[0].Icon,
      items: skillCategories[0].items,
      className: "xl:col-start-1 xl:col-span-4 xl:row-start-1",
    },
    {
      title: skillCategories[1].title,
      Icon: skillCategories[1].Icon,
      items: skillCategories[1].items,
      className: "xl:col-start-5 xl:col-span-4 xl:row-start-1",
    },
    {
      title: skillCategories[2].title,
      Icon: skillCategories[2].Icon,
      items: skillCategories[2].items,
      className: "xl:col-start-9 xl:col-span-4 xl:row-start-1",
    },
    {
      title: skillCategories[3].title,
      Icon: skillCategories[3].Icon,
      items: skillCategories[3].items,
      className: "xl:col-start-1 xl:col-span-4 xl:row-start-2",
    },
    {
      title: extraSkillCategories[1].title,
      Icon: extraSkillCategories[1].Icon,
      items: extraSkillCategories[1].items,
      className: "xl:col-start-1 xl:col-span-4 xl:row-start-3 md:col-span-2",
    },
    {
      title: skillCategories[4].title,
      Icon: skillCategories[4].Icon,
      items: skillCategories[4].items,
      className: "xl:col-start-5 xl:col-span-4 xl:row-start-2",
    },
    {
      title: extraSkillCategories[0].title,
      Icon: extraSkillCategories[0].Icon,
      items: extraSkillCategories[0].items,
      className: "xl:col-start-9 xl:col-span-4 xl:row-start-2",
    },
  ] as const;
  const professionalMetrics = extraSkillCategories[2].items.map(({ name, Icon }) => {
    const [label, valuePart] = name.split(" - ");
    return {
      label,
      value: Number.parseInt(valuePart?.replace("%", "") ?? "0", 10) || 0,
      Icon,
    };
  });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Technical Skills"
          subtitle="Technologies I work with"
        />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-min xl:gap-8">
            {leftSkillCards.map(({ title, Icon: CatIcon, items, className }) => {
              const isSoftwareEngineering = title === "Software Engineering";

              return (
              <div
                key={title}
                className={`rounded-2xl border border-border bg-card/60 p-6 backdrop-blur card-hover ${className} ${isSoftwareEngineering ? "pb-5" : ""}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <CatIcon className="size-4 text-primary" />
                  </div>
                  <h3 className="text-base font-bold">{title}</h3>
                </div>
                <div className={isSoftwareEngineering ? "grid grid-cols-2 gap-2" : "flex flex-wrap gap-2"}>
                  {items.map(({ name, Icon }, itemIndex) => (
                    <span
                      key={name}
                      className={`group inline-flex min-w-0 items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary cursor-default ${isSoftwareEngineering && itemIndex === 1 ? "justify-center" : ""} ${isSoftwareEngineering && itemIndex === 4 ? "col-span-2 justify-center" : ""}`}
                    >
                      <Icon className="size-3 text-primary transition-transform group-hover:scale-110" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>

          <div>
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur card-hover">
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Star className="size-4 text-primary" />
                </div>
                <h3 className="text-base font-bold">Professional Skills</h3>
              </div>
              <div className="space-y-4">
                {professionalMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <metric.Icon className="size-3 text-primary" />
                        {metric.label}
                      </span>
                      <span className="font-semibold">{metric.value}%</span>
                    </div>
                    <div className="skill-progress">
                      <i style={{ width: `${metric.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const filtered = filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects Showcase"
          subtitle="A curated selection of projects demonstrating architecture, UI/UX, and engineering craft."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-all ${
                  active
                    ? "bg-primary text-primary-foreground border-primary glow-shadow"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden card-hover transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: `${project.accent}25` }}
    >
      {/* Card header — image if available, else gradient */}
      {project.image ? (
        <div className="relative overflow-hidden" style={{ borderBottom: `2px solid ${project.accent}30` }}>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay with title */}
          <div
            className="absolute inset-0 flex flex-col justify-end px-4 pb-3"
            style={{
              background: `linear-gradient(to top, ${project.accent}CC 0%, transparent 55%)`,
            }}
          >
            <h3 className="text-base font-bold text-white drop-shadow flex items-center gap-1.5 leading-tight">
              {project.icon && <span className="text-lg shrink-0">{project.icon}</span>}
              <span>{project.title}</span>
            </h3>
            {project.subtitle && (
              <p className="text-[11px] text-white/80 mt-0.5">{project.subtitle}</p>
            )}
          </div>
          {project.featured && (
            <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-amber-500/90 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow">
              <Star className="size-3" /> Featured
            </span>
          )}
        </div>
      ) : (
        <div
          className="relative h-36 flex flex-col justify-center px-5 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accent}25 0%, ${project.accent}10 50%, transparent 100%)`,
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
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-tight truncate flex items-center gap-1.5" style={{ color: project.accent }}>
                  {project.icon && <span className="text-xl shrink-0">{project.icon}</span>}
                  <span className="truncate">{project.title}</span>
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-medium text-muted-foreground mt-0.5 truncate">
                    {project.subtitle}
                  </p>
                )}
              </div>
              {project.featured && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/20 text-amber-400 px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                  <Star className="size-3" /> Featured
                </span>
              )}
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              #{String(index + 1).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <span
          className="inline-flex self-start items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-3"
          style={{
            color: project.accent,
            borderColor: `${project.accent}40`,
            backgroundColor: `${project.accent}10`,
          }}
        >
          <Sparkles className="size-3" /> {project.category}
        </span>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <ul className="text-xs text-muted-foreground space-y-1.5 mb-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="shrink-0 text-emerald-400">✅</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => {
            const color = techColors[t] || "#00d4ff";
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold border hover:scale-105 transition-transform"
                style={{
                  backgroundColor: `${color}15`,
                  color,
                  borderColor: `${color}25`,
                }}
              >
                <span className="size-1.5 rounded-full" style={{ backgroundColor: color }} />
                {t}
              </span>
            );
          })}
        </div>

        <div className="flex gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg bg-primary/10 text-primary px-3 py-2 text-xs font-semibold hover:bg-primary/20 transition-colors"
          >
            <Github className="size-4" /> GitHub
          </a>
          {project.demoUrl !== "Not applicable" && (
            project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg bg-primary text-primary-foreground px-3 py-2 text-xs font-semibold hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="size-4" /> Live Demo
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg px-3 py-2 text-xs font-semibold bg-muted text-muted-foreground cursor-not-allowed opacity-60"
              >
                <ExternalLink className="size-4" /> Coming Soon
              </button>
            )
          )}
        </div>
      </div>
    </article>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 experience-card" style={{ borderColor: `${item.tech[0] ? techColors[item.tech[0]] || '#00d4ff' : '#00d4ff'}33` }}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h4 className="text-lg font-bold text-primary">{item.role}</h4>
        <span className="text-xs font-semibold text-muted-foreground">{item.year}</span>
      </div>
      <p className="text-base font-bold text-foreground">{item.project}</p>
      <p className="mt-3 text-sm">
        <span className="font-semibold text-foreground">Focus:</span>{" "}
        <span className="text-muted-foreground">{item.focus}</span>
      </p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
          Key Contributions
        </p>
        <ul className="space-y-1.5">
          {item.contributions.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="size-3.5 mt-1 shrink-0 text-primary" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.tech.map((t) => {
          const color = techColors[t] || "#00d4ff";
          return (
            <span
              key={t}
              className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold border"
              style={{
                backgroundColor: `${color}15`,
                color,
                borderColor: `${color}25`,
              }}
            >
              {t}
            </span>
          );
        })}
      </div>

      <div className="mt-6 flex gap-2">
        <a href={item.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-95 transition-colors">
          <Github className="size-4" /> View Code
        </a>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Journey" title="Experience & Projects" />

        <div className="space-y-14">
          {/* Full-Stack */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">💻</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                FULL-STACK DEVELOPMENT
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {fullStackExperience.map((item) => (
                <ExperienceCard key={item.project} item={item} />
              ))}
            </div>
          </div>

          {/* Java */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">☕</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                JAVA APPLICATION DEVELOPMENT
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {javaExperience.map((item) => (
                <ExperienceCard key={item.project} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📱</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                MOBILE APPLICATION DEVELOPMENT
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {mobileExperience.map((item) => (
                <ExperienceCard key={item.project} item={item} />
              ))}
            </div>
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
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const details = [
    { Icon: User, label: "Name", value: "G P G Hasini Sandamini Gamage" },
    { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: Phone, label: "Phone", value: "076-2098904", href: "tel:0762098904" },
    { Icon: MapPin, label: "Address", value: "Sandamina, Ellagama, Diyathalawa" },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSubmitError(null);

    try {
      const result = await sendContactMessage({ data: form });

      if (result.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else if (typeof window !== "undefined") {
        window.location.href = result.fallbackMailto ?? buildContactMailtoHref(form);
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch {
      setSubmitError("Unable to send right now. Please use the email link below.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's Connect" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a question or just want to say hi? I'll try my best to get back to you!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className={inputCls}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${inputCls} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.01] glow-shadow"
              >
                <Send className="size-4" /> {sending ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <p className="text-center text-sm text-primary">Thanks! Your message has been sent.</p>
              )}
              {submitError && <p className="text-center text-sm text-destructive">{submitError}</p>}
            </form>
          </div>

          {/* Right — info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
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

            <div className="flex justify-center gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center size-11 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all">
                <Github className="size-5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center size-11 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all">
                <Linkedin className="size-5" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="inline-flex items-center justify-center size-11 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center size-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Github className="size-4" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center size-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="inline-flex items-center justify-center size-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
