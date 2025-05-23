'use client';

import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export function ExperienceContent() {
  return (
    <PageWrapper>
      <div className="container px-4 py-8 pt-20 md:py-12 lg:py-16">
        <AnimatedDiv variant={fadeInUp} className="mx-auto max-w-[750px] space-y-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground">
            My journey as a student trying to learn new skills and apply them to real projects
          </p>
        </AnimatedDiv>

        <StaggerContainer className="mt-8 space-y-8">
          {experiences.map((experience) => (
            <StaggerItem
              key={`${experience.company}-${experience.startDate}`}
            >
              <AnimatedCard className="rounded-lg border bg-card p-6">
                <div>
                  <h2 className="text-xl font-semibold">{experience.title}</h2>
                  <h3 className="text-lg text-muted-foreground">{experience.company}</h3>
                  
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {experience.startDate} - {experience.endDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>

                  <p className="mt-4">{experience.description}</p>

                  <div className="mt-4">
                    <h4 className="font-medium">Key Responsibilities:</h4>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} className="text-white bg-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
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
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedButton>
        </AnimatedDiv>
      </div>
    </PageWrapper>
  );
} 