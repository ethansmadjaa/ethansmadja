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
    title: "Machine Learning Course",
    description: "Comprehensive machine learning course materials and projects",
    longDescription: "A collection of Jupyter notebooks and projects covering various machine learning concepts, algorithms, and practical implementations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/ethansmadjaa/Machine-learning-course"
  }
]; 