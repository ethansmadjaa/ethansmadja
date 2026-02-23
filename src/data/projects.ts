export type ProjectCategory = "saas" | "mobile" | "web" | "ml" | "tool";
export type ProjectStatus = "live" | "in-development" | "archived" | "concept";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string | string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  year: string;
  category: ProjectCategory;
  status: ProjectStatus;
  highlights: string[];
  features?: ProjectFeature[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    slug: "coach2train",
    title: "Coach2Train",
    description: "SaaS platform for sports coaches to manage clients and generate AI-powered training programs.",
    longDescription: "Coach2Train is a SaaS platform designed for sports coaches, featuring client management, AI-powered training program generation (week-by-week with OpenAI), usage cost tracking, editable landing page content via a lightweight CMS, and a brutalist-luxury dark UI. Built with Clerk authentication, Drizzle ORM on Neon PostgreSQL, and server-side architecture throughout.",
    image: [
      "/projects/coach2train/logo.jpg",
      "/projects/coach2train/dashboard.jpeg",
      "/projects/coach2train/pricing.jpeg",
      "/projects/coach2train/client-profile.jpeg",
      "/projects/coach2train/client-tracking.jpeg",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Clerk",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "OpenAI API",
      "Sentry",
      "Vercel",
    ],
    liveUrl: "https://coach2train.com",
    role: "Freelance Developer",
    year: "2026 – Present",
    category: "saas",
    status: "live",
    highlights: [
      "AI generates week-by-week training programs via OpenAI",
      "Full client management with profile tracking",
      "Lightweight CMS for editable landing page content",
      "Usage cost tracking per coach",
      "Brutalist-luxury dark UI design system",
      "Admin panel for user and platform management",
    ],
    features: [
      { title: "AI Program Generation", description: "Coaches describe goals and constraints, OpenAI generates structured week-by-week training programs with progressive overload." },
      { title: "Client Management", description: "Full client profiles with tracking history, notes, and program assignment." },
      { title: "Admin Panel", description: "Full admin dashboard for managing users, monitoring platform usage, and overseeing coach accounts." },
      { title: "CMS Landing Page", description: "Coaches can edit their public-facing landing page content without touching code." },
      { title: "Usage Billing", description: "Tracks AI generation costs per coach for transparent billing." },
    ],
    challenges: [
      "Designing a prompt pipeline that produces consistent, structured training programs across different sports",
      "Building a CMS flexible enough for coaches but simple enough to not need documentation",
    ],
  },

  {
    slug: "fidjoo",
    title: "Fidjoo",
    description: "AI-powered creative storytelling app for kids.",
    longDescription: "Fidjoo is an AI-driven mobile app that lets children create animated books, combining React Native, Python/FastAPI microservices, PostgreSQL, and advanced LLM pipelines for story generation and multimedia creation.",
    image: [
      "/projects/fidjoo/logo.PNG",
      "/projects/fidjoo/IMG_2943.PNG",
      "/projects/fidjoo/IMG_2945.PNG",
      "/projects/fidjoo/IMG_2946.PNG",
      "/projects/fidjoo/IMG_2947.PNG",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "iOS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "NLP Pipelines",
      "Distributed Tasks",
    ],
    liveUrl: "https://fidjoo.com",
    role: "Co-founder & Lead Developer",
    year: "2025 – 2026",
    category: "mobile",
    status: "archived",
    highlights: [
      "LLM pipeline generates children's stories with age-appropriate content",
      "Multimedia creation: text, images, and animations combined into animated books",
      "Microservice architecture with FastAPI backend and distributed task processing",
      "React Native app published on iOS App Store",
      "Color-following text UI to assist children with reading",
    ],
    features: [
      { title: "Story Generation", description: "Multi-step LLM pipeline that creates age-appropriate narratives with characters, plot arcs, and moral lessons." },
      { title: "Animated Books", description: "Stories rendered as interactive animated books with illustrations and page-turn animations." },
      { title: "Microservices Backend", description: "Python/FastAPI services handling story generation, image creation, and book assembly as distributed tasks." },
      { title: "Reading Assist", description: "Color-highlighted text that follows along as children read, helping them track words and improving reading comprehension." },
    ],
    challenges: [
      "Designing a child-friendly UX that young kids can navigate intuitively",
      "Publishing the app on the iOS App Store for the first time — navigating review guidelines and provisioning",
      "Ensuring LLM output was consistently safe and age-appropriate for children",
      "Coordinating multiple async microservices (story → images → assembly) with reliable error handling",
    ],
  },

  {
    slug: "dan-systemes",
    title: "Dan Systèmes",
    description: "SEO-optimized landing page for a French IT solutions provider.",
    longDescription: "Dan Systèmes is a professional landing page for a French electronic and IT reseller, featuring a modern design with Framer Motion animations, contact forms with email integration via Resend, and comprehensive SEO optimization including structured metadata and sitemap generation.",
    image: [
      "/projects/dansystemes/logo.webp",
      "/projects/dansystemes/screenshot.jpeg",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Framer Motion",
      "Resend",
      "Vercel",
    ],
    liveUrl: "https://www.dansystemes.com",
    role: "Freelance Developer",
    year: "2025 – 2026",
    category: "web",
    status: "live",
    highlights: [
      "SEO-first architecture with structured metadata and sitemap generation",
      "Contact form with email integration via Resend",
      "Smooth Framer Motion animations throughout",
      "Fully responsive design optimized for French market",
    ],
    features: [
      { title: "SEO Optimization", description: "Structured data, meta tags, sitemap, and semantic HTML for maximum search engine visibility." },
      { title: "Contact Integration", description: "Form submissions sent via Resend with confirmation emails to both client and visitor." },
      { title: "Animated UI", description: "Page transitions and scroll-triggered animations using Framer Motion." },
    ],
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and TypeScript.",
    longDescription: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/ethansmadjaa/ethansmadja",
    liveUrl: "https://ethansmadja.com",
    role: "Solo Developer",
    year: "2024 – Present",
    category: "web",
    status: "live",
    highlights: [
      "Dark mode with next-themes",
      "SEO optimized with structured data and sitemap",
      "Framer Motion animations and page transitions",
      "hCaptcha-protected contact form",
    ],
  },

  {
    slug: "tablazard",
    title: "Tablazard",
    description: "A mobile app for event organizers to receive table reservations, publish events, and build a social network around nightlife.",
    longDescription: "Tablazard is a mobile platform for event organizers to publish events, receive table reservations directly, and engage with a social network of partygoers. It features both a user-facing app and an admin app for full event and reservation management. Built with React Native and Expo.",
    image: "/projects/tablazard/tablazard.svg",
    technologies: ["React Native", "Expo", "TypeScript", "iOS", "Web"],
    githubUrl: "https://github.com/tablazard",
    role: "Unpaid Developer",
    year: "2024",
    category: "mobile",
    status: "archived",
    highlights: [
      "Dual apps: user-facing social app and admin management app",
      "Event publishing with direct table reservation system",
      "Social network features for nightlife community",
      "Built with React Native and Expo",
    ],
    features: [
      { title: "Table Reservations", description: "Event organizers receive table reservations directly through the app, streamlining the booking process." },
      { title: "Event Publishing", description: "Organizers publish events with full details, visible to the social network of users." },
      { title: "Social Network", description: "Users discover events, follow organizers, and engage with the nightlife community." },
      { title: "Admin App", description: "Separate admin interface for managing events, reservations, and user accounts." },
    ],
    challenges: [
      "First time working with React Native — learning the ecosystem from scratch",
      "First solo project of this scale — managing all aspects of development alone",
      "Time management as a solo developer juggling features, bugs, and deadlines",
    ],
  },

  {
    slug: "vocca-testing",
    title: "Vocca Testing",
    description: "Platform to test Vocca AI agents online, used for client demos.",
    longDescription: "A web platform to test Vocca AI agents online, built during an internship. Used internally and shared with clients to demonstrate voice AI capabilities.",
    image: "/projects/vocca/logo.webp",
    technologies: ["Python", "Pipecat-ai", "Daily", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://testing.vocca.ai/?lang=fr",
    role: "Intern",
    year: "2025",
    category: "web",
    status: "live",
    highlights: [
      "Real-time AI voice agent testing interface",
      "Integration with Pipecat-ai and Daily for voice streaming",
      "Multi-language support (French/English)",
    ],
  },

  {
    slug: "demo-vocca-ai",
    title: "Demo vocca.ai",
    description: "Platform to showcase demos using Vocca AI agents.",
    longDescription: "A card-based platform to showcase demos using Vocca AI agents, built during an internship. Allowed visitors to interact with different AI agent configurations and was used for client presentations.",
    image: "/projects/vocca/logo.webp",
    technologies: ["Next.js", "React", "Vapi", "Tailwind CSS", "Pipecat-ai", "Vercel"],
    liveUrl: "https://demo.vocca.ai/",
    role: "Intern",
    year: "2025",
    category: "web",
    status: "archived",
    highlights: [
      "Card-based UI showcasing multiple AI agent demos",
      "Live voice interaction with AI agents via Vapi",
      "Quick-deploy demo setup for client presentations",
    ],
  },

  {
    slug: "machine-learning-course",
    title: "Machine Learning Course",
    description: "Comprehensive machine learning course materials and projects.",
    longDescription: "A collection of Jupyter notebooks and projects covering various machine learning concepts, algorithms, and practical implementations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/ethansmadjaa/Machine-learning-course",
    role: "Student",
    year: "2024",
    category: "ml",
    status: "archived",
    highlights: [
      "Covers regression, classification, clustering, and neural networks",
      "Hands-on implementations with Scikit-learn and NumPy",
      "Data analysis and visualization with Pandas",
    ],
  },

  {
    slug: "flashcards",
    title: "FlashCards",
    description: "Desktop flashcard app built out of necessity — before NotebookLM existed.",
    longDescription: "A Python-based flashcard application built because there was no easy way to study course material at the time (before tools like NotebookLM). Features spaced repetition and a desktop GUI with PyQt6. If rebuilt today, it would be a React web app.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    technologies: ["Python", "PyQt6", "SQLite", "Educational Software"],
    githubUrl: "https://github.com/ethansmadjaa/FlashCards",
    role: "Solo Developer",
    year: "2023",
    category: "tool",
    status: "archived",
    highlights: [
      "Spaced repetition algorithm for optimized learning",
      "Desktop GUI built with PyQt6",
      "SQLite persistence for card decks and progress",
    ],
  },

  {
    slug: "vocca-training",
    title: "Vocca Training",
    description: "Technical test project to join Vocca — backend AI agent with Google Calendar integration.",
    longDescription: "Technical test built to join Vocca as an intern. A backend-only AI agent using Pipecat-ai for voice interaction, OpenAI for NLP, and Google Calendar API for automated scheduling. No frontend — pure backend pipeline.",
    image: "/projects/vocca/logo.webp",
    technologies: ["Python", "OpenAI API", "Google API", "Pipecat-ai", "Daily", "Google Cloud", "Google Calendar"],
    githubUrl: "https://github.com/ethansmadjaa/Vocca_training",
    role: "Intern",
    year: "2024",
    category: "tool",
    status: "archived",
    highlights: [
      "NLP pipeline using OpenAI API for conversation processing",
      "Google Calendar integration for automated scheduling",
      "Voice interaction via Pipecat-ai and Daily",
    ],
  },

  {
    slug: "internship-monitor",
    title: "InternshipMonitor",
    description: "Tool to track internship applications and follow up on submissions.",
    longDescription: "A Python-based tool to track internship applications, monitor their status, and keep a history of communications. Built to stay organized during the internship search.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop",
    technologies: ["Python", "Data Management", "Task Tracking", "SQLite"],
    githubUrl: "https://github.com/ethansmadjaa/InternshipMonitor",
    role: "Solo Developer",
    year: "2023",
    category: "tool",
    status: "archived",
    highlights: [
      "Track application status across multiple companies",
      "Communication history logging",
      "SQLite backend for persistent storage",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
