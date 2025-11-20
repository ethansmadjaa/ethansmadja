export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
export const experiences: Experience[] = [
  {
    title: "Co-Founder & CTO",
    company: "Fidjoo",
    location: "Paris, France",
    startDate: "Oct 2025",
    endDate: "Present",
    description:
      "Leading the technical vision and development of Fidjoo, an AI-powered creative platform enabling children to generate animated books.",
    responsibilities: [
      "Architecting the full technical ecosystem: React Native, Expo, FastAPI microservices, Supabase/PostgreSQL",
      "Designing and maintaining LLM pipelines for story, image, and video generation",
      "Managing distributed tasks, caching layers, and scalable workflows",
      "Building the mobile app experience and supervising UX/UI integration",
      "Coordinating with designers, developers, and external partners"
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "FastAPI",
      "Python",
      "Supabase",
      "PostgreSQL",
      "LLMs",
      "Celery",
      "Redis"
    ]
  },
  {
    title: "Freelance Software Engineer",
    company: "Self-employed",
    location: "Paris, France",
    startDate: "Sept 2025",
    endDate: "Present",
    description:
      "Helping startups and companies build AI-powered products, automate workflows, and ship web/mobile features quickly and reliably.",
    responsibilities: [
      "Building full-stack applications and internal tools",
      "Designing AI-first product features and automation flows",
      "Developing APIs, microservices, and data pipelines",
      "Advising teams on architecture, best practices, and LLM integration"
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Supabase",
      "AI/LLM Pipelines",
      "Automation (n8n)"
    ]
  },
  {
    title: "AI Developer",
    company: "Vocca.ai",
    location: "Paris, France",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Building AI agents and internal tools at a fast-growing health-tech startup.",
    responsibilities: [
      "Developing AI-powered receptionist agents capable of handling medical appointment workflows",
      "Integrating medical software via Python APIs with strict typing and documentation",
      "Developing web interfaces and dashboards using Next.js, Supabase and Tailwind",
      "Processing audio data and designing ML-enhanced features",
      "Contributing to a fast-scaling startup environment"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Pipecat-ai",
      "Daily"
    ]
  },
  {
    title: "Full-stack Web Developer Intern",
    company: "Layan",
    location: "Paris, France",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    description:
      "Contributed to web development projects using Symfony framework and implemented testing solutions.",
    responsibilities: [
      "Created and optimized End-to-End tests using Cypress",
      "Modified and developed web pages with Symfony, Twig, HTML, and CSS",
      "Improved user experience and optimized workflows"
    ],
    technologies: ["Symfony", "Twig", "HTML", "CSS", "Cypress", "Testing"]
  },
  {
    title: "Engineer Intern",
    company: "Implants Diffusion International",
    location: "Montreuil, France",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    description:
      "Worked on product design and database management for dental implant systems.",
    responsibilities: [
      "Designed a product range for the control and transport of dental implants",
      "Managed digital document workflows",
      "Updated and maintained databases"
    ],
    technologies: [
      "Product Design",
      "Database Management",
      "Documentation",
      "CAD",
      "Solidworks"
    ]
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    location: "Paris Region, France",
    startDate: "Sept 2022",
    endDate: "Present",
    description:
      "Providing personalized tutoring in mathematics and computer science to students.",
    responsibilities: [
      "Teaching Mathematics (statistics, probability, linear algebra)",
      "Teaching Programming with Python",
      "Teaching Web Development fundamentals",
      "Adapting teaching methods to individual student needs"
    ],
    technologies: [
      "Mathematics",
      "Statistics",
      "Teaching",
      "Physics",
      "Computer Science"
    ]
  }
];
