export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and TypeScript",
    longDescription: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/ethansmadjaa/ethansmadja",
    liveUrl: "https://ethansmadja.com"
  },
  {
    title: "Testing Vocca",
    description: "Platform to test the capabilities of the Vocca AI agents",
    longDescription: "A platform to test the capabilities of the Vocca AI agents, leveraging Ai frameworks like Pipecat-ai, and web frameworks like Next.js and React",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Pipecat-ai", "Daily", "React", "Next.js", "Typescript", "Tailwind CSS"],
    liveUrl: "https://testing.vocca.ai/?lang=fr"
  },
  {
    title: "Demo vocca.ai",
    description: "Platform to showcase Demos using Vocca AI agents",
    longDescription: "A card based platform to showcase Demos using Vocca AI agents",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=60",
    technologies: ["Next.js", "React", "Vapi", "Tailwind CSS", "Pipecat-ai", "vercel"],
    liveUrl: "https://demo.vocca.ai/"
  },
  {
    title: "Machine Learning Course",
    description: "Comprehensive machine learning course materials and projects",
    longDescription: "A collection of Jupyter notebooks and projects covering various machine learning concepts, algorithms, and practical implementations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/ethansmadjaa/Machine-learning-course"
  },
  {
    title: "FlashCards",
    description: "Interactive flashcard learning application",
    longDescription: "A Python-based flashcard application designed to help users learn and memorize information through an interactive interface and spaced repetition.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    technologies: ["Python", "PyQt6", "SQLite", "Educational Software"],
    githubUrl: "https://github.com/ethansmadjaa/FlashCards"
  },
  {
    title: "Pricing Vocca",
    description: "An automated ROI calculator for Vocca",
    longDescription: "An automated ROI calculator for Vocca, using Next.js and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60",
    technologies: ["Python", "Pipecat-ai", "Daily", "React", "Next.js", "Typescript", "Tailwind CSS", "vercel"],
    liveUrl: "https://pricing.vocca.ai/"
  },
  {
    title: "Vocca Training",
    description: "Internship application project",
    longDescription: "Project showcasing AI development skills using various technologies and APIs for natural language processing and automation.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
    technologies: ["Python", "OpenAI API", "Google API", "Pipecat-ai", "Daily"],
    githubUrl: "https://github.com/ethansmadjaa/Vocca_training"
  },
  {
    title: "InternshipMonitor",
    description: "Internship application tracking system",
    longDescription: "A Python-based system for tracking and managing internship applications, including status updates and communication history.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop",
    technologies: ["Python", "Data Management", "Task Tracking", "SQLite"],
    githubUrl: "https://github.com/ethansmadjaa/InternshipMonitor"
  }
]; 