import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="container flex min-h-screen flex-col items-center justify-center gap-4 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-0">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
            alt="Ethan Smadja"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Ethan Smadja
          </h1>
          <h2 className="text-lg text-muted-foreground sm:text-xl">
            Full Stack Software Engineer
          </h2>
        </div>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          I build exceptional digital experiences that combine elegant design with
          robust functionality. Passionate about creating innovative solutions that
          make a real impact.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/ethansmadja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com/in/ethansmadja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-8 py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project cards will go here */}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="container space-y-8 py-12 md:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[750px] flex-col items-center gap-4">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
              Skills & Technologies
            </h2>
            <p className="text-center text-muted-foreground">
              A selection of the technologies and tools I work with.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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