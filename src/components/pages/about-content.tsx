'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { skills } from "@/data/skills";
import { 
  AnimatedDiv, 
  AnimatedSection, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedButton,
  AnimatedCard,
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn
} from "@/components/animations";
import { PageWrapper } from "@/components/page-wrapper";

export function AboutContent() {
  return (
    <PageWrapper>
      <div className="container px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="space-y-8">
          <AnimatedDiv variant={fadeInUp} className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              Data & AI Student interested in Software Engineering and new
              technologies.
            </p>
          </AnimatedDiv>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <AnimatedDiv 
              variant={slideInLeft}
              delay={0.2}
              className="order-2 space-y-4 md:order-1"
            >
              <p className="text-base sm:text-lg">
                Hello! I'm Ethan, a passionate student pursuing a Master's in <strong>Data & AI</strong> at ECE Paris. Currently based in Paris, I'm dedicated to creating <strong>innovative solutions</strong> using nowadays technologies and different programming languages.
              </p>
              <p className="text-base sm:text-lg">
                My journey in technology began with my studies at ECE Paris, where
                I developed a strong foundation in <strong>mathematics</strong> (statistics,
                probability, linear algebra), <strong>programming</strong> (C, Python, Java), and 
                 <strong>web development</strong>. During my exchange at Omnes Education London
                School, I expanded my expertise in <strong>finance</strong>, <strong>management</strong>, and 
                <strong>machine learning</strong>, including a notable project developing a facial
                recognition system using MATLAB that could identify individuals
                from a database of 500 images.
              </p>
              <p className="text-base sm:text-lg">
                I’ve also had the opportunity to complete several <strong>internships</strong>, during which I worked on a wide range of projects across various technologies.
                My experience spans <strong>web development</strong>, <strong>machine learning</strong>, <strong>IOS</strong>, and <strong>AI</strong>. Notably, I was the first employee at Vocca,
                a startup that uses <strong>AI</strong> to build agents capable of handling receptionist tasks such as booking,
                modifying, and canceling patient appointments, as well as answering common questions.
                The company recently secured <strong>€5 million</strong> in funding and is now expanding its team.
              </p>
              <p className="text-base sm:text-lg">
                Beyond my technical pursuits, I'm actively involved in <strong>community</strong> 
                service as a Director at Moadon Summer Camps, where I organize activities for the 
                youth (ages 8-17) and manage teams of camp counsellors. I'm also
                passionate about <strong>music</strong> (piano), <strong>sports</strong>, and exploring new cultures
                through <strong>travel</strong>.
              </p>
            </AnimatedDiv>
            <AnimatedDiv 
              variant={scaleIn}
              delay={0.4}
              className="order-1 flex justify-center md:order-2"
            >
              <Image
                src="/profile.jpg"
                alt="Ethan Smadja"
                width={240}
                height={240}
                className="rounded-lg object-cover sm:w-[300px] sm:h-[300px]"
                priority
              />
            </AnimatedDiv>
          </div>

          <AnimatedSection className="space-y-6">
            <AnimatedDiv variant={fadeInUp}>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Skills & Expertise
              </h2>
            </AnimatedDiv>

            <StaggerContainer className="space-y-4">
              {skills.map((skill) => (
                <StaggerItem key={skill.title}>
                  <AnimatedCard>
                    <Card>
                      <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                        <CardTitle className="text-lg sm:text-xl">
                          {skill.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          {skill.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                        {skill.items.map((item) => (
                          <Badge key={item} className="text-white bg-primary">{item}</Badge>
                        ))}
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection className="space-y-6">
            <AnimatedDiv variant={fadeInUp}>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Education & Certifications
              </h2>
            </AnimatedDiv>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <AnimatedCard>
                  <Card>
                    <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                      <CardTitle className="text-lg sm:text-xl">ECE Paris</CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        Master DATA & IA (2024–2026)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                      <p className="text-sm sm:text-base">
                        Advanced studies in databases, data visualization with Python,
                        machine learning, business intelligence, operating systems,
                        and applied mathematics for data.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>

              <StaggerItem>
                <AnimatedCard>
                  <Card>
                    <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                      <CardTitle className="text-lg sm:text-xl">ECE Paris</CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        Cycle Préparatoire (2021-2024)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                      <p className="text-sm sm:text-base">
                        Focus on Mathematics (statistics, probability, linear
                        algebra), programming (C, Python, Java), full-stack web
                        development (HTML, JavaScript, CSS), and physics.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>

              <StaggerItem>
                <AnimatedCard>
                  <Card>
                    <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                      <CardTitle className="text-lg sm:text-xl">
                        Omnes Education London School
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        Exchange Program (Sept–Dec 2023)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                      <p className="text-sm sm:text-base">
                        Studied finance, management, mathematics, Python, machine
                        learning, and data visualization. Developed a facial
                        recognition system using MATLAB that could identify
                        individuals from a database of 500 images.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedDiv 
            variant={fadeInUp}
            className="flex justify-center pt-8"
          >
            <AnimatedButton>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/experience" className="text-white">
                  View My Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedButton>
          </AnimatedDiv>
        </div>
      </div>
    </PageWrapper>
  );
} 