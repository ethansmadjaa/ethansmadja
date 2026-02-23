'use client';

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
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

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  if (images.length === 1) {
    return (
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden group">
      <Image
        src={images[current]}
        alt={`${alt} (${current + 1}/${images.length})`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-all duration-300"
      />
      <button
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all ${i === current ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsContent() {
  const router = useRouter();
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
            {projects.map((project) => {
              const images = typeof project.image === 'string' ? [project.image] : project.image;
              return (
                <StaggerItem key={project.title} className="h-full">
                  <AnimatedCard
                    className="flex flex-col overflow-hidden h-full cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      if ((e.target as HTMLElement).closest('a, button')) return;
                      router.push(`/projects/${project.slug}`);
                    }}
                  >
                    <Card className="flex flex-col overflow-hidden h-full">
                      <ImageCarousel images={images} alt={project.title} />
                      <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                        <div className="mb-2 flex flex-wrap items-center gap-1.5">
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">{project.category}</Badge>
                          <Badge
                            variant="outline"
                            className={`text-[10px] px-1.5 py-0 ${
                              project.status === "live"
                                ? "border-green-500/40 text-green-600 dark:text-green-400"
                                : project.status === "in-development"
                                  ? "border-yellow-500/40 text-yellow-600 dark:text-yellow-400"
                                  : "border-muted-foreground/40 text-muted-foreground"
                            }`}
                          >
                            {project.status}
                          </Badge>
                          <span className="text-[10px] text-muted-foreground">{project.year}</span>
                        </div>
                        <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="grow px-4 pb-0 sm:px-6">
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
              );
            })}
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
