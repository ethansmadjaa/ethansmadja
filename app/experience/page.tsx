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
    <div className="container max-w-4xl py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Professional Experience</h1>
          <p className="text-xl text-muted-foreground">
            My journey as a software engineer across various roles and projects
          </p>
        </div>

        <div className="space-y-8">
          {/* Senior Software Engineer */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Senior Software Engineer</CardTitle>
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
            <CardContent className="space-y-4">
              <p>
                Lead developer for enterprise-level web applications, focusing on scalability, 
                performance optimization, and implementing best practices.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2">
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
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Software Engineer</CardTitle>
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
            <CardContent className="space-y-4">
              <p>
                Developed interactive data visualization tools and dashboards for business intelligence applications.
              </p>
              <div>
                <h3 className="font-medium">Key Achievements:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2">
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
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>Junior Web Developer</CardTitle>
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
            <CardContent className="space-y-4">
              <p>
                Contributed to the development of e-commerce platforms and payment processing systems.
              </p>
              <div>
                <h3 className="font-medium">Key Responsibilities:</h3>
                <ul className="ml-6 list-disc space-y-1 pt-2">
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
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild>
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