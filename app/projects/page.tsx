import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Projects - Ethan Smadja",
  description: "Explore Ethan Smadja's portfolio of software engineering projects and technical work.",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="mx-auto max-w-[750px] space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">My Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my technical work and software engineering projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="E-commerce Platform"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>E-commerce Platform</CardTitle>
              <CardDescription>
                A full-featured online shopping platform with secure payment processing
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Built a modern e-commerce platform with product catalog, shopping cart, user authentication, 
                and secure payment processing. Implemented responsive design for optimal mobile experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">Redux</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/ecommerce-platform" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://ecommerce-demo.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Data Visualization Dashboard"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Data Visualization Dashboard</CardTitle>
              <CardDescription>
                Interactive analytics dashboard for business intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Developed a real-time analytics dashboard that processes and visualizes large datasets. 
                Features include customizable charts, filters, and export capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">D3.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">WebSockets</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/data-viz-dashboard" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://dataviz.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Task Management App"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Task Management App</CardTitle>
              <CardDescription>
                Collaborative project management tool with real-time updates
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Created a task management application with features like drag-and-drop task organization, 
                team collaboration, deadline tracking, and real-time notifications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Prisma</Badge>
                <Badge variant="secondary">tRPC</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/task-manager" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://taskmanager.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 4 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Weather App"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Weather App</CardTitle>
              <CardDescription>
                Real-time weather forecasting with location-based services
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Built a weather application that provides real-time forecasts, historical data, 
                and location-based services. Features include interactive maps and severe weather alerts.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">OpenWeather API</Badge>
                <Badge variant="secondary">Mapbox</Badge>
                <Badge variant="secondary">PWA</Badge>
                <Badge variant="secondary">Geolocation</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/weather-app" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://weather.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 5 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Fitness Tracker"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Fitness Tracker</CardTitle>
              <CardDescription>
                Personal fitness tracking and workout planning application
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Developed a fitness tracking application that allows users to log workouts, 
                track progress, set goals, and view performance analytics over time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">Chart.js</Badge>
                <Badge variant="secondary">Health API</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/fitness-tracker" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://fitness.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 6 */}
          <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Recipe Sharing Platform"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Recipe Sharing Platform</CardTitle>
              <CardDescription>
                Social platform for sharing and discovering recipes
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm text-muted-foreground">
                Built a recipe sharing platform where users can discover, share, and save recipes. 
                Features include search functionality, user profiles, and ingredient-based filtering.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">AWS S3</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href="https://github.com/ethansmadja/recipe-platform" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="https://recipes.ethansmadja.com" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 