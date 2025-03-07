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
import { skills } from "@/data/skills";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="hero"
        className="flex flex-col items-center justify-center px-4 pt-20 sm:pt-36 md:pt-40 lg:pt-44 pb-8 sm:pb-12 md:pb-20 lg:pb-24 min-h-[85vh]"
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ethan Smadja
            </h1>
            <p className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Student Software Engineer
            </p>
            <p className="mx-auto mt-4 max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground">
              I build innovative solutions with a focus on clean, efficient, and
              maintainable code.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 bg-[#00A] hover:bg-[#0077cc] text-white"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 text-[#00A] border-[#00A] hover:bg-[#EEEEFF]"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
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
                    <Badge key={tech} className="text-white bg-primary">
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
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 sm:flex-none bg-primary text-white hover:bg-primary/80"
                  >
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
        <div className="flex justify-center pt-8">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/projects" className="text-white">
              View All my Projects
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full border-t bg-muted/40">
        <div className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
            <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
              Skills & Expertise
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              A comprehensive overview of my technical and professional
              capabilities
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.title} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold">{skill.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <Badge key={index} className="text-white bg-primary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
