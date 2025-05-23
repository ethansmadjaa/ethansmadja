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
    title: "AI Developer",
    company: "Vocca.ai",
    location: "Paris, France",
    startDate: "Jan 2025",
    endDate: "Present",
    description: "Building AI agents and developing innovative solutions in a fast-growing environment.",
    responsibilities: [
      "Developing and implementing AI agents using cutting-edge technologies",
      "Working in a fast-paced, innovative environment",
      "Learning and applying new technologies in AI development",
      "Contributing to the growth of an emerging AI company"
    ],
    technologies: ["AI Development", "Python", "Pipecat-ai", "Daily", "React", "Next.js", "Typescript", "Tailwind CSS"]
  },
  {
    title: "Full-stack Web Developer Intern",
    company: "Layan",
    location: "Paris, France",
    startDate: "Jan 2024",
    endDate: "Feb 2024",
    description: "Contributed to web development projects using Symfony framework and implemented testing solutions.",
    responsibilities: [
      "Created and optimized End-to-End tests using Cypress",
      "Modified and developed web pages with Symfony framework, Twig, HTML, and CSS",
      "Enhanced user experience and streamlined technical operations"
    ],
    technologies: ["Symfony", "Twig", "HTML", "CSS", "Cypress", "Testing"]
  },
  {
    title: "Engineer Intern",
    company: "Implants Diffusion International",
    location: "Montreuil, France",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    description: "Worked on product design and database management for dental implant systems.",
    responsibilities: [
      "Designed a product range for the control and transport of dental implants",
      "Managed digital document workflows",
      "Updated and maintained databases"
    ],
    technologies: ["Product Design", "Database Management", "Documentation", "Technical Design", "CAD", "Solidworks"]
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    location: "Paris Region, France",
    startDate: "Sept 2022",
    endDate: "Present",
    description: "Providing personalized tutoring in mathematics and computer science to students.",
    responsibilities: [
      "Teaching Mathematics (statistics, probability, linear algebra)",
      "Teaching Programming with Python",
      "Teaching Web Development fundamentals",
      "Adapting teaching methods to individual student needs"
    ],
    technologies: ["Mathematics", "Statistics", "Teaching", "Physics", "Computer Science"]
  }
]; 