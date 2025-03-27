export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
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
    title: "BigDataSpark",
    description: "Financial data analysis and insights platform",
    longDescription: "A Python application that analyzes financial data using Apache Spark, providing insights and visualizations for better decision-making.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop",
    technologies: ["Python", "Apache Spark", "Data Analysis", "Financial Data", "Streamlit"],
    githubUrl: "https://github.com/ethansmadjaa/BigDataSpark",
    liveUrl: "https://bigdataspark.streamlit.app/"
  },
  {
    title: "Demo.vocca.ai",
    description: "Implemented a platform to showcase the capabilities of the Vocca AI agents",
    longDescription: "a next.js and react project leveraging Vapi agents to showcase the capabilities of the Vocca AI agents",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop",
    technologies: ["Next.js", "React", "Vapi", "Tailwind CSS"],
    githubUrl: "https://github.com/ethansmadjaa/vocca-demo-local.git",
    liveUrl: "https://vocca-demo.vercel.app/"
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
    title: "SecretSanta",
    description: "Automated gift exchange organizer",
    longDescription: "A Python application that automates the Secret Santa gift exchange process, randomly assigning participants while respecting exclusion rules.",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&h=450&fit=crop",
    technologies: ["Python", "Pandas", "Email Automation", "Random Algorithm"],
    githubUrl: "https://github.com/ethansmadjaa/SecretSanta"
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
  },
  {
    title: "DoctoLibECE",
    description: "Medical appointment booking system",
    longDescription: "A Java-based medical appointment booking system inspired by Doctolib, developed as part of an ECE course project.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    technologies: ["Java", "SQL", "JDBC", "OOP"],
    githubUrl: "https://github.com/ethansmadjaa/DoctoLibECE"
  }
]; 