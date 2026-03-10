'use client';

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
import { Github, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { 
  AnimatedDiv, 
  AnimatedSection, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedButton,
  AnimatedCard,
  AnimatedText,
  fadeInUp
} from "@/components/animations";
import { PageWrapper } from "@/components/page-wrapper";

export function HomeContent() {
  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        <section
          id="hero"
          className="relative overflow-hidden flex flex-col items-center justify-center px-4 pt-20 sm:pt-36 md:pt-40 lg:pt-44 pb-8 sm:pb-12 md:pb-20 lg:pb-24 min-h-screen"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 50%, rgba(255,255,255,0) 100%), radial-gradient(ellipse at 50% 120%, hsl(var(--primary)) 0%, hsl(var(--background)) 80%)',
              opacity: 0.7
            }}
          >
            <div
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 70%)',
                backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 100%, hsl(var(--primary)) 0deg, hsl(var(--primary)) 2deg, transparent 2deg, transparent 10deg)',
                bottom: '-20%',
                height: '100%',
                left: '50%',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
                opacity: 0.2,
                pointerEvents: 'none',
                position: 'absolute',
                transform: 'translateX(-50%)',
                width: '200%'
              }}
            />
          </div>
          <div className="container mx-auto flex flex-col items-center text-center relative z-10">
            <div className="mx-auto max-w-3xl">
              <AnimatedText
                text="Ethan Smadja"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              />
              <AnimatedDiv 
                variant={fadeInUp}
                delay={0.5}
                className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl text-muted-foreground"
              >
                Software Engineer & Founder of VibeStack
              </AnimatedDiv>
              <AnimatedDiv 
                variant={fadeInUp}
                delay={0.7}
                className="mx-auto mt-4 max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground"
              >
                I help non-technical founders turn ideas into real products using AI.
              </AnimatedDiv>
              <AnimatedDiv 
                variant={fadeInUp}
                delay={0.9}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <AnimatedButton>
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-8 bg-[#00A] hover:bg-[#0077cc] text-white"
                  >
                    <Link href="/contact">Launch Your product Today</Link>
                  </Button>
                </AnimatedButton>
                <AnimatedButton>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base px-8 text-[#00A] border-[#00A] hover:bg-[#EEEEFF]"
                  >
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </AnimatedButton>
              </AnimatedDiv>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </section>

        <AnimatedSection id="featured-projects" className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <AnimatedDiv 
            variant={fadeInUp}
            className="mx-auto flex max-w-[750px] flex-col items-center gap-4"
          >
            <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
              Featured Projects
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
          </AnimatedDiv>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <StaggerItem key={project.title}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <AnimatedCard className="flex flex-col overflow-hidden h-full">
                    <Card className="flex flex-col overflow-hidden h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={typeof project.image === 'string' ? project.image : project.image[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grow px-4 pb-0 sm:px-6">
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
                        {project.githubUrl && (
                          <AnimatedButton>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 sm:flex-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                              }}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                          </AnimatedButton>
                        )}
                        {project.liveUrl && (
                          <AnimatedButton>
                            <Button
                              size="sm"
                              className="flex-1 sm:flex-none bg-primary text-white hover:bg-primary/80"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                              }}
                            >
                              <ArrowUpRight className="mr-2 h-4 w-4" />
                              Live Site
                            </Button>
                          </AnimatedButton>
                        )}
                      </CardFooter>
                    </Card>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedDiv 
            variant={fadeInUp}
            className="flex justify-center pt-8"
          >
            <AnimatedButton>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/projects" className="text-white">
                  View All my Projects
                </Link>
              </Button>
            </AnimatedButton>
          </AnimatedDiv>
        </AnimatedSection>

        <AnimatedSection className="w-full border-t bg-muted/40">
          <div className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
            <AnimatedDiv 
              variant={fadeInUp}
              className="mx-auto flex max-w-[750px] flex-col items-center gap-4"
            >
              <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
                Skills & Expertise
              </h2>
              <p className="text-center text-sm sm:text-base text-muted-foreground">
                A comprehensive overview of my technical and professional
                capabilities
              </p>
            </AnimatedDiv>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <StaggerItem key={skill.title}>
                  <AnimatedCard className="rounded-lg border bg-card p-4">
                    <div>
                      <h3 className="font-semibold">{skill.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {skill.items.map((item, index) => (
                          <Badge key={index} className="text-white bg-primary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </PageWrapper>
  );
} 