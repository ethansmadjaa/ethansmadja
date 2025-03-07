export interface Skill {
  title: string;
  description: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    title: "Programming & Development",
    description: "Core programming languages and development tools",
    items: [
      "Python (Pandas, Matplotlib, Scikit-learn, Numpy)",
      "PHP",
      "Java",
      "Git",
      "React",
      "Next.js",
      "TypeScript"
    ]
  },
  {
    title: "Data Science & AI",
    description: "Data analysis and machine learning expertise",
    items: [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
      "TensorFlow",
      "Statistical Analysis"
    ]
  },
  {
    title: "Web Technologies",
    description: "Full-stack web development technologies",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Cypress Testing",
      "Symfony",
      "Twig"
    ]
  },
  {
    title: "Mathematics",
    description: "Strong mathematical foundation for data science",
    items: [
      "Statistics",
      "Probability",
      "Linear Algebra",
      "Applied Mathematics for Data",
      "Mathematical Modeling"
    ]
  },
  {
    title: "Languages",
    description: "Professional communication skills",
    items: [
      "French (Native)",
      "English (TOEFL 93, TOEIC 930)",
      "Spanish (B1)"
    ]
  },
  {
    title: "Leadership & Soft Skills",
    description: "Professional and interpersonal capabilities",
    items: [
      "Team Management",
      "Event Planning",
      "Teaching",
      "Community Service (BAFA Certified)",
      "Project Management",
      "Problem Solving"
    ]
  }
]; 