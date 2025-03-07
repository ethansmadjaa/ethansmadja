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
          {/* Senior Software Engineer */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Senior Software Engineer</CardTitle>
                  <CardDescription className="text-base">TechInnovate Solutions</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2021 - Present</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Lead developer for enterprise-level web applications, focusing on scalability, 
                performance optimization, and implementing best practices.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Architected and implemented a microservices-based platform that improved system reliability by 40%</li>
                  <li>Led a team of 5 developers, providing mentorship and code reviews</li>
                  <li>Collaborated with product managers to define technical requirements and roadmaps</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
                  <li>Conducted technical interviews and contributed to hiring decisions</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Kubernetes</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Software Engineer */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Software Engineer</CardTitle>
                  <CardDescription className="text-base">DataViz Corp</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Mar 2019 - Dec 2020</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Seattle, WA</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Developed interactive data visualization tools and dashboards for business intelligence applications.
              </p>
              <div>
                <h3 className="font-medium">Key Achievements:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Built a real-time analytics dashboard that processed over 1M data points daily</li>
                  <li>Reduced page load time by 65% through code optimization and lazy loading techniques</li>
                  <li>Implemented responsive design principles, improving mobile user experience</li>
                  <li>Created reusable component library that accelerated development across teams</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">D3.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Express</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Junior Developer */}
          <Card>
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Junior Web Developer</CardTitle>
                  <CardDescription className="text-base">E-Commerce Solutions</CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jun 2017 - Feb 2019</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Portland, OR</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
              <p className="text-sm sm:text-base">
                Contributed to the development of e-commerce platforms and payment processing systems.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2 text-sm sm:text-base">
                  <li>Developed and maintained front-end features for e-commerce websites</li>
                  <li>Implemented payment gateway integrations with Stripe and PayPal</li>
                  <li>Created responsive email templates that improved click-through rates by 25%</li>
                  <li>Collaborated with designers to implement UI/UX improvements</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">HTML/CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">jQuery</Badge>
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