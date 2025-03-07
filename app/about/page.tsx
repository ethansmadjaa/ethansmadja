import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "About - Ethan Smadja",
  description: "Learn more about Ethan Smadja, his background, skills, and professional journey.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Software engineer passionate about building exceptional digital experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <p>
              Hello! I'm Ethan, a full-stack software engineer with a passion for creating elegant, 
              efficient solutions to complex problems. With a strong foundation in both frontend and 
              backend technologies, I specialize in building responsive web applications that deliver 
              exceptional user experiences.
            </p>
            <p>
              My journey in software development began with a curiosity about how digital products work 
              behind the scenes. This curiosity evolved into a career where I've had the opportunity to 
              work on diverse projects across various industries, from e-commerce platforms to data 
              visualization tools.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying current with emerging technologies 
              and best practices. When I'm not coding, you can find me exploring new hiking trails, 
              experimenting with photography, or diving into a good book.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Ethan Smadja"
              width={300}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Skills & Expertise</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Building responsive and accessible user interfaces</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>JavaScript</Badge>
                <Badge>HTML5</Badge>
                <Badge>CSS3</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Redux</Badge>
                <Badge>Responsive Design</Badge>
                <Badge>Accessibility</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Creating robust server-side applications and APIs</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MongoDB</Badge>
                <Badge>REST APIs</Badge>
                <Badge>GraphQL</Badge>
                <Badge>Authentication</Badge>
                <Badge>Authorization</Badge>
                <Badge>Serverless</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DevOps & Tools</CardTitle>
                <CardDescription>Streamlining development and deployment processes</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>GitHub</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
                <Badge>CI/CD</Badge>
                <Badge>Jest</Badge>
                <Badge>Testing Library</Badge>
                <Badge>Cypress</Badge>
                <Badge>Webpack</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Education & Certifications</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription>University of Technology, 2015-2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Graduated with honors, focusing on software engineering and data structures.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Certified Developer - Associate</CardTitle>
                <CardDescription>Amazon Web Services, 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Certification validating proficiency in developing, deploying, and debugging cloud-based applications using AWS.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link href="/experience">
              View My Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 