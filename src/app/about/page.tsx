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

export const metadata = {
  title: "About - Ethan Smadja",
  description:
    "Learn more about Ethan Smadja, his background, skills, and professional journey.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Data & AI Student interested in Software Engineering and new
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="order-2 space-y-4 md:order-1">
            <p className="text-sm sm:text-base">
              Hello! I'm Ethan, a passionate student pursuing a Master's in Data
              & AI at ECE Paris. Currently based in Paris, I'm dedicated to
              creating innovative solutions using nowadays technologies and
              different programming languages.
            </p>
            <p className="text-sm sm:text-base">
              My journey in technology began with my studies at ECE Paris, where
              I developed a strong foundation in mathematics (statistics,
              probability, linear algebra), programming (C, Python, Java), and
              web development. During my exchange at Omnes Education London
              School, I expanded my expertise in finance, management, and
              machine learning, including a notable project developing a facial
              recognition system using MATLAB that could identify individuals
              from a database of 500 images.
            </p>
            <p className="text-sm sm:text-base">
              Beyond my technical pursuits, I'm actively involved in community
              service as a Director at Moadon, where I organize activities for
              youth (ages 8-17) and manage teams of animators. I'm also
              passionate about music (piano), sports, and exploring new cultures
              through travel.
            </p>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="/profile.jpg"
              alt="Ethan Smadja"
              width={240}
              height={240}
              className="rounded-lg object-cover sm:w-[300px] sm:h-[300px]"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Skills & Expertise
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">
                  Programming & Development
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Core programming languages and development tools
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>PHP</Badge>
                <Badge>HTML</Badge>
                <Badge>JavaScript</Badge>
                <Badge>CSS</Badge>
                <Badge>Git</Badge>
                <Badge>JetBrains IDEs</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">
                  Data Science & Machine Learning
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Data analysis and AI technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <Badge>Python</Badge>
                <Badge>Scikit-learn</Badge>
                <Badge>Pandas</Badge>
                <Badge>Matplotlib</Badge>
                <Badge>Machine Learning</Badge>
                <Badge>Data Analysis</Badge>
                <Badge>Data Visualization</Badge>
                <Badge>MATLAB</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">
                  Mathematics & Statistics
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Mathematical foundations and statistical analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <Badge>Statistics</Badge>
                <Badge>Probability</Badge>
                <Badge>Linear Algebra</Badge>
                <Badge>Applied Mathematics</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">
                  Web Development & Testing
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Full-stack development and quality assurance
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <Badge>Next.js</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Cypress</Badge>
                <Badge>End-to-End Testing</Badge>
                <Badge>SQL</Badge>
                <Badge>NoSQL</Badge>
                <Badge>React</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">Languages</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Professional language proficiency
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <Badge>French (Native)</Badge>
                <Badge>English (Fluent)</Badge>
                <Badge>Spanish (B1)</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Education & Certifications
          </h2>

          <div className="space-y-4">
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
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/experience">
              View My Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
