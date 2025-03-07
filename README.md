# Ethan Smadja - Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and professional experience as a student software engineer.

![Portfolio Website Screenshot](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Project Showcase**: Gallery of personal and academic projects with details
- **Skills & Expertise**: Comprehensive overview of technical capabilities
- **Professional Experience**: Timeline of work and educational experience
- **Contact Form**: Easy way for visitors to get in touch
- **Modern UI**: Clean, professional interface with smooth animations
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v13.5.1)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.2.2)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.0.12)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) for accessible components
  - Custom components built with Tailwind
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **Static Export**: Configured for static site generation
- **Deployment**: Ready for deployment on platforms like Vercel, Netlify, or GitHub Pages

## 📋 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── experience/       # Experience page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout component
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components (buttons, cards, etc.)
│   ├── navigation.tsx    # Site navigation
│   ├── footer.tsx        # Site footer
│   ├── mode-toggle.tsx   # Theme toggle component
│   └── theme-provider.tsx # Theme context provider
├── data/                 # Data files
│   ├── projects.ts       # Project information
│   ├── skills.ts         # Skills and expertise data
│   └── experiences.ts    # Work and education history
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ethansmadjaa/ethansmadja.git
   cd ethansmadja
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Configuration

### Content Customization

All content is stored in TypeScript files in the `src/data` directory:

- `projects.ts`: Add or modify your project showcase items
- `skills.ts`: Update your skills and expertise
- `experiences.ts`: Edit your work and educational history

### Styling

- Global styles are in `src/app/globals.css`
- Theme configuration is in `tailwind.config.ts`
- Color scheme can be adjusted by modifying CSS variables in `globals.css`

## 📤 Deployment

This project is configured for static export using Next.js's export feature:

```bash
yarn build
# or
npm run build
```

The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

### Deployment Platforms

- **Vercel**: Recommended for Next.js projects
- **Netlify**: Easy deployment with continuous integration
- **GitHub Pages**: Free hosting for personal projects
- **AWS S3/CloudFront**: For scalable, high-performance hosting

## 🧩 Adding New Content

### Adding a New Project

1. Open `src/data/projects.ts`
2. Add a new project object to the `projects` array:
   ```typescript
   {
     title: "Project Name",
     description: "Short description",
     longDescription: "Detailed description of the project",
     image: "https://path-to-image.jpg",
     technologies: ["Tech1", "Tech2", "Tech3"],
     githubUrl: "https://github.com/username/repo",
     liveUrl: "https://project-demo.com" // Optional
   }
   ```

### Adding a New Page

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your page content
3. Update the navigation in `src/components/navigation.tsx`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ethansmadjaa/ethansmadja/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 📞 Contact

Ethan Smadja - [Contact Page](https://ethansmadja.com/contact)

Project Link: [https://github.com/ethansmadjaa/ethansmadja](https://github.com/ethansmadjaa/ethansmadja) 