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
    <div className="container max-w-4xl px-4 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">About Me</h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Software engineer passionate about building exceptional digital experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="order-2 space-y-4 md:order-1">
            <p className="text-sm sm:text-base">
              Hello! I'm Ethan, a passionate student pursuing a Master's in Data & AI at ECE Paris. I combine my technical skills 
              in full-stack development with a strong foundation in mathematics and machine learning. Currently based in Courbevoie, 
              France, I'm dedicated to creating innovative solutions at the intersection of web development and data science.
            </p>
            <p className="text-sm sm:text-base">
              My journey in technology began with my studies at ECE Paris, where I developed a strong foundation in mathematics 
              (statistics, probability, linear algebra), programming (C, Python, Java), and web development. During my exchange at 
              Omnes Education London School, I expanded my expertise in finance, management, and machine learning, including a notable 
              project developing a facial recognition system using MATLAB that could identify individuals from a database of 500 images.
            </p>
            <p className="text-sm sm:text-base">
              Beyond my technical pursuits, I'm actively involved in community service as a Director at Moadon, where I organize 
              activities for youth (ages 8-17) and manage teams of animators. I'm also passionate about music (piano), sports (padel), 
              and exploring new cultures through travel.
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
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Skills & Expertise</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">Frontend Development</CardTitle>
                <CardDescription className="text-sm sm:text-base">Building responsive and accessible user interfaces</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
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
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">Backend Development</CardTitle>
                <CardDescription className="text-sm sm:text-base">Creating robust server-side applications and APIs</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
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
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">DevOps & Tools</CardTitle>
                <CardDescription className="text-sm sm:text-base">Streamlining development and deployment processes</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
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
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Education & Certifications</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">Bachelor of Science in Computer Science</CardTitle>
                <CardDescription className="text-sm sm:text-base">University of Technology, 2015-2019</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <p className="text-sm sm:text-base">Graduated with honors, focusing on software engineering and data structures.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                <CardTitle className="text-lg sm:text-xl">AWS Certified Developer - Associate</CardTitle>
                <CardDescription className="text-sm sm:text-base">Amazon Web Services, 2021</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                <p className="text-sm sm:text-base">Certification validating proficiency in developing, deploying, and debugging cloud-based applications using AWS.</p>
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
  )
} 