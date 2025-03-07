import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 pb-8 pt-24 md:min-h-screen md:pb-12 md:pt-32 lg:py-0">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/profile.jpg"
            alt="Ethan Smadja"
            width={150}
            height={150}
            className="rounded-full sm:h-[200px] sm:w-[200px]"
            priority
          />
          <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Ethan Smadja
          </h1>
          <h2 className="text-center text-base text-muted-foreground sm:text-lg md:text-xl">
            Full Stack Software Engineer
          </h2>
        </div>
        <p className="max-w-[750px] text-center text-sm sm:text-lg md:text-xl text-muted-foreground">
          I build exceptional digital experiences that combine elegant design with
          robust functionality. Passionate about creating innovative solutions that
          make a real impact.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex gap-4 pt-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/ethansmadjaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/ethan-smadja-4191b0216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
          <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
            Featured Projects
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <CardTitle className="text-lg">E-commerce Platform</CardTitle>
              <CardDescription className="text-sm">
                A full-featured online shopping platform
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-4 pb-0 sm:px-6">
              <p className="text-sm text-muted-foreground">
                Built a modern e-commerce platform with product catalog, shopping cart, 
                and secure payment processing.
              </p>
            </CardContent>
            <CardFooter className="px-4 py-4 sm:px-6 sm:py-5">
              <Button size="sm" asChild className="w-full">
                <Link href="/projects">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <CardTitle className="text-lg">Data Visualization</CardTitle>
              <CardDescription className="text-sm">
                Interactive analytics dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-4 pb-0 sm:px-6">
              <p className="text-sm text-muted-foreground">
                Developed a real-time analytics dashboard that processes and visualizes 
                large datasets with customizable charts.
              </p>
            </CardContent>
            <CardFooter className="px-4 py-4 sm:px-6 sm:py-5">
              <Button size="sm" asChild className="w-full">
                <Link href="/projects">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
              <CardTitle className="text-lg">Task Management App</CardTitle>
              <CardDescription className="text-sm">
                Collaborative project management tool
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-4 pb-0 sm:px-6">
              <p className="text-sm text-muted-foreground">
                Created a task management application with drag-and-drop organization, 
                team collaboration, and real-time updates.
              </p>
            </CardContent>
            <CardFooter className="px-4 py-4 sm:px-6 sm:py-5">
              <Button size="sm" asChild className="w-full">
                <Link href="/projects">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="container space-y-8 px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
            <h2 className="text-center text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl">
              Skills & Technologies
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              A selection of the technologies and tools I work with.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Frontend Development</h3>
              <p className="text-sm text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Backend Development</h3>
              <p className="text-sm text-muted-foreground">
                Node.js, Express, PostgreSQL, REST APIs
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">DevOps & Tools</h3>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, CI/CD
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}