'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, MapPin } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { 
  AnimatedDiv, 
  AnimatedSection, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedButton,
  AnimatedCard,
  fadeInUp,
  slideInLeft,
  slideInRight
} from "@/components/animations";
import { PageWrapper } from "@/components/page-wrapper";

export function ContactContent() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hcaptchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get the CAPTCHA token only if hCaptcha is configured
    const captchaToken = hcaptchaRef.current?.getResponse();

    if (process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && !captchaToken) {
      toast({
        title: "Error",
        description: "Please complete the CAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        // Reset the form and CAPTCHA
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        hcaptchaRef.current?.resetCaptcha();
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add error handling for hCaptcha
  const handleCaptchaError = () => {
    console.error('hCaptcha error occurred');
    toast({
      title: "Error",
      description: "There was an error loading the CAPTCHA. Please refresh the page.",
      variant: "destructive",
    });
  };

  return (
    <PageWrapper>
      <div className="container px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <AnimatedDiv variant={fadeInUp} className="space-y-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Get In Touch</h1>
            <p className="mx-auto max-w-[700px] text-base text-muted-foreground sm:text-lg">
              Have a project in mind or want to discuss potential opportunities ? I'd love to hear from you.
            </p>
          </AnimatedDiv>

          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <AnimatedDiv variant={slideInLeft} delay={0.2} className="space-y-6">
              <AnimatedCard>
                <Card>
                  <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                    <CardTitle className="text-lg sm:text-xl">Connect</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Find me on these platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 pb-4 sm:px-6 sm:pb-5">
                    <a
                      href="https://github.com/ethansmadjaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-start gap-3">
                        <Github className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">GitHub</h3>

                          github.com/ethansmadjaa

                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ethan-smadja-4191b0216/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-start gap-3">
                        <Linkedin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">LinkedIn</h3>

                          linkedin.com/in/ethan-smadja

                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ethan-smadja-4191b0216/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-sm text-muted-foreground">
                            Paris Region, France
                          </p>
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </AnimatedDiv>

            <AnimatedDiv variant={slideInRight} delay={0.4}>
              <AnimatedCard>
                <Card>
                  <CardHeader className="px-4 py-4 sm:px-6 sm:py-5">
                    <CardTitle className="text-lg sm:text-xl">Send Me a Message</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Fill out the form below and I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 sm:px-6 sm:pb-5">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                        <StaggerItem className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </StaggerItem>
                        <StaggerItem className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </StaggerItem>
                      </StaggerContainer>

                      <AnimatedDiv variant={fadeInUp} delay={0.6} className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </AnimatedDiv>

                      <AnimatedDiv variant={fadeInUp} delay={0.7} className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </AnimatedDiv>

                      {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && (
                        <AnimatedDiv variant={fadeInUp} delay={0.8} className="flex justify-center">
                          <HCaptcha
                            ref={hcaptchaRef}
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                            theme="light"
                            onError={handleCaptchaError}
                          />
                        </AnimatedDiv>
                      )}

                      <AnimatedDiv variant={fadeInUp} delay={0.9}>
                        <AnimatedButton>
                          <Button
                            type="submit"
                            className="w-full sm:w-auto text-white bg-primary"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </AnimatedButton>
                      </AnimatedDiv>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
} 