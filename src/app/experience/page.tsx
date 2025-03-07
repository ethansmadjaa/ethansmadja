import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Experience - Ethan Smadja",
  description: "Explore Ethan Smadja's professional experience, work history, and career achievements.",
}

export default function ExperiencePage() {
  return (
    <div className="container max-w-4xl px-4 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Professional Experience</h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            My journey as a software engineer across various roles and projects
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Vocca.ai */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">AI Developer</CardTitle>
                  <CardDescription className="text-base">Vocca.ai</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Building AI agents and developing innovative solutions in a fast-growing environment.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Developing and implementing AI agents using cutting-edge technologies</li>
                  <li>Working in a fast-paced, innovative environment</li>
                  <li>Learning and applying new technologies in AI development</li>
                  <li>Contributing to the growth of an emerging AI company</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">AI Development</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Fast-growing Environment</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Layan Internship */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Full-stack Web Developer Intern</CardTitle>
                  <CardDescription className="text-base">Layan</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2024 - Feb 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Contributed to web development projects using Symfony framework and implemented testing solutions.
              </p>
              <div>
                <h3 className="font-medium">Key Achievements:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Created and optimized End-to-End tests using Cypress</li>
                  <li>Modified and developed web pages with Symfony framework, Twig, HTML, and CSS</li>
                  <li>Enhanced user experience and streamlined technical operations</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Symfony</Badge>
                <Badge variant="outline">Twig</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">Cypress</Badge>
              </div>
            </CardContent>
          </Card>

          {/* IDI Internship */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Engineer Intern</CardTitle>
                  <CardDescription className="text-base">Implants Diffusion International</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2023 - Feb 2023</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Montreuil, France</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Worked on product design and database management for dental implant systems.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Designed a product range for the control and transport of dental implants</li>
                  <li>Managed digital document workflows</li>
                  <li>Updated and maintained databases</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Product Design</Badge>
                <Badge variant="outline">Database Management</Badge>
                <Badge variant="outline">Documentation</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Private Tutor */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Private Tutor</CardTitle>
                  <CardDescription className="text-base">Self-employed</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Sept 2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Paris Region, France</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Providing personalized tutoring in mathematics and computer science to students.
              </p>
              <div>
                <h3 className="font-medium">Areas of Focus:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Mathematics (statistics, probability, linear algebra)</li>
                  <li>Python programming</li>
                  <li>Web development fundamentals</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Mathematics</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Web Development</Badge>
                <Badge variant="outline">Teaching</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Moadon */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Director & Volunteer</CardTitle>
                  <CardDescription className="text-base">Moadon</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2018 - Present</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Leading youth activities and community service initiatives.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Oversee and organize activities for youth (ages 8-17)</li>
                  <li>Manage teams of 10 to 22 animators</li>
                  <li>Plan daily schedules for summer camps</li>
                  <li>Organize food package collections for underprivileged families</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Leadership</Badge>
                <Badge variant="outline">Team Management</Badge>
                <Badge variant="outline">Event Planning</Badge>
                <Badge variant="outline">Community Service</Badge>
                <Badge variant="outline">BAFA Certified</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/projects">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 