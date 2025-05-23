'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Phone } from "lucide-react"
import { 
  AnimatedDiv, 
  AnimatedSection, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedButton,
  AnimatedCard,
  fadeInUp
} from "@/components/animations";
import { PageWrapper } from "@/components/page-wrapper";

export function ProjectsContent() {
  return (
    <PageWrapper>
      <div className="container px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="space-y-8">
          <AnimatedDiv 
            variant={fadeInUp}
            className="mx-auto max-w-[750px] space-y-4 text-center"
          >
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">My Projects</h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              A showcase of my technical work and coding projects.
            </p>
          </AnimatedDiv>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <AnimatedCard className="flex flex-col overflow-hidden">
                  <Card className="flex flex-col overflow-hidden h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow px-4 pb-0 sm:px-6">
                      <p className="mb-4 text-sm text-muted-foreground">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="text-white bg-primary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 px-4 py-4 sm:px-6 sm:py-5">
                      {project.githubUrl && (
                        <AnimatedButton>
                          <Button size="sm" variant="outline" asChild className="flex-1 sm:flex-none">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Link>
                          </Button>
                        </AnimatedButton>
                      )}
                      {project.liveUrl && (
                        <AnimatedButton>
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
                        </AnimatedButton>
                      )}
                    </CardFooter>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedDiv 
            variant={fadeInUp}
            className="flex justify-center pt-8"
          >
            <AnimatedButton>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact" className="text-white">
                  Contact Me
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedButton>
          </AnimatedDiv>
        </div>
      </div>
    </PageWrapper>
  )
} 