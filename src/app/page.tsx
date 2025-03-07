import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 pb-2 pt-8 md:min-h-[50vh] md:pb-6 md:pt-6 lg:py-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Ethan Smadja
          </h1>
          <h2 className="text-center text-base text-muted-foreground sm:text-lg md:text-xl">
            Data & AI Student interested in Software Engineering.
          </h2>
        </div>
        <p className="max-w-[750px] text-center text-sm sm:text-lg md:text-xl text-muted-foreground">
          I try to learn new things everyday by building comprehensive and
          innovative projects that can serve a real purpose.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex gap-4 pt-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/ethansmadjaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/ethan-smadja-4191b0216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
          <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
            Featured Projects
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-4 pb-0 sm:px-6">
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 px-4 py-4 sm:px-6 sm:py-5">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1 sm:flex-none"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button size="sm" asChild className="flex-1 sm:flex-none">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Live Site
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      <section className="w-full border-t bg-muted/40">
        <div className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
            <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
              Skills & Technologies
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              A selection of the technologies and tools I work with.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Frontend Development</h3>
              <p className="text-sm text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Backend Development</h3>
              <p className="text-sm text-muted-foreground">
                Node.js, Express, PostgreSQL, REST APIs
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">DevOps & Tools</h3>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, CI/CD
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
