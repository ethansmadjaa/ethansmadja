'use client';

import { useState, useCallback, SyntheticEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Layers, Calendar, User, FolderOpen, CircleDot, CheckCircle2, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/page-wrapper";
import {
  AnimatedDiv,
  AnimatedButton,
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/components/animations";
import type { Project } from "@/data/projects";

type Orientation = "landscape" | "portrait" | "square";

function getOrientation(w: number, h: number): Orientation {
  const ratio = w / h;
  if (ratio > 1.15) return "landscape";
  if (ratio < 0.85) return "portrait";
  return "square";
}

/**
 * A single gallery tile.
 *
 * Keeps each image at its own aspect ratio (detected on load) and uses
 * `object-contain` on a soft frame, so logos, landscape screenshots and
 * portrait phone shots all display fully — never cropped, never oversized.
 * Tiles flow in a masonry layout, so varied heights pack together for a
 * dynamic-but-compact gallery.
 */
function GalleryImage({
  src,
  alt,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}) {
  const [orientation, setOrientation] = useState<Orientation | null>(null);

  const handleLoad = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    setOrientation(getOrientation(img.naturalWidth, img.naturalHeight));
  }, []);

  const aspectClass = {
    landscape: "aspect-video",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  }[orientation ?? "landscape"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.06, duration: 0.4, ease: "easeOut" }}
      onClick={onClick}
      className={`group relative mb-3 lg:mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border bg-muted/30 ${aspectClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        priority={index === 0}
        onLoad={handleLoad}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-h-[90vh] max-w-[90vw]"
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="rounded-lg object-contain max-h-[90vh]"
        />
      </motion.div>
    </motion.div>
  );
}

export function ProjectDetailContent({ project }: { project: Project }) {
  const images = typeof project.image === "string" ? [project.image] : project.image;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <PageWrapper>
      <div className="container px-4 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl mx-auto">
        {/* Back link */}
        <AnimatedDiv variant={fadeIn} className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>
        </AnimatedDiv>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 lg:gap-4">
          {/* ── Title block ── */}
          <AnimatedDiv
            variant={slideInLeft}
            className="relative overflow-hidden rounded-2xl border bg-card md:col-span-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/[0.04] via-transparent to-transparent" />
            <div className="relative flex flex-col justify-end p-6 sm:p-8 lg:p-10">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-1.5 text-xs">
                  <FolderOpen className="h-3 w-3" />
                  {project.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={`gap-1.5 text-xs ${
                    project.status === "live"
                      ? "border-green-500/40 text-green-600 dark:text-green-400"
                      : project.status === "in-development"
                        ? "border-yellow-500/40 text-yellow-600 dark:text-yellow-400"
                        : "border-muted-foreground/40 text-muted-foreground"
                  }`}
                >
                  <CircleDot className="h-3 w-3" />
                  {project.status}
                </Badge>
                <Badge variant="outline" className="gap-1.5 text-xs">
                  <Calendar className="h-3 w-3" />
                  {project.year}
                </Badge>
                <Badge variant="outline" className="gap-1.5 text-xs">
                  <User className="h-3 w-3" />
                  {project.role}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>
            </div>
          </AnimatedDiv>

          {/* ── Links block ── */}
          <AnimatedDiv
            variant={slideInRight}
            className="flex flex-col items-stretch justify-center gap-3 rounded-2xl border bg-card p-6 sm:p-8 md:col-span-4"
          >
            {project.liveUrl && (
              <AnimatedButton className="w-full">
                <Button asChild size="lg" className="w-full bg-primary text-white hover:bg-primary/80">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </Link>
                </Button>
              </AnimatedButton>
            )}
            {project.githubUrl && (
              <AnimatedButton className="w-full">
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
              </AnimatedButton>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <p className="text-center text-sm text-muted-foreground">
                Private project — no public links.
              </p>
            )}
          </AnimatedDiv>

          {/* ── Gallery (masonry) ── */}
          {images.length > 0 && (
            <div className="md:col-span-12">
              <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-4">
                {images.map((img, i) => (
                  <GalleryImage
                    key={`${img}-${i}`}
                    src={img}
                    alt={i === 0 ? project.title : `${project.title} — ${i + 1}`}
                    index={i}
                    onClick={() => setLightboxImage(img)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Description ── */}
          <AnimatedDiv
            variant={fadeInUp}
            delay={0.2}
            className="rounded-2xl border bg-card p-6 sm:p-8 lg:p-10 md:col-span-8"
          >
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              About
            </h2>
            <p className="text-base leading-[1.8] text-foreground/85 sm:text-lg">
              {project.longDescription}
            </p>
          </AnimatedDiv>

          {/* ── Tech stack ── */}
          <AnimatedDiv
            variant={fadeInUp}
            delay={0.3}
            className="rounded-2xl border bg-card p-6 sm:p-8 md:col-span-4"
          >
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Built with
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.04, duration: 0.3 }}
                >
                  <Badge className="bg-primary text-white">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </AnimatedDiv>

          {/* ── Highlights ── */}
          {project.highlights.length > 0 && (
            <AnimatedDiv
              variant={fadeInUp}
              delay={0.35}
              className="rounded-2xl border bg-card p-6 sm:p-8 md:col-span-12"
            >
              <h2 className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Zap className="h-3.5 w-3.5" />
                Highlights
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-sm text-foreground/85 sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </AnimatedDiv>
          )}

          {/* ── Features ── */}
          {project.features && project.features.length > 0 && (
            <AnimatedDiv
              variant={fadeInUp}
              delay={0.4}
              className="rounded-2xl border bg-card p-6 sm:p-8 md:col-span-12"
            >
              <h2 className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Layers className="h-3.5 w-3.5" />
                Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.06, duration: 0.3 }}
                    className="rounded-xl border bg-muted/30 p-4"
                  >
                    <h3 className="mb-1 text-sm font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedDiv>
          )}

          {/* ── Challenges ── */}
          {project.challenges && project.challenges.length > 0 && (
            <AnimatedDiv
              variant={fadeInUp}
              delay={0.45}
              className="rounded-2xl border bg-card p-6 sm:p-8 md:col-span-12"
            >
              <h2 className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Lightbulb className="h-3.5 w-3.5" />
                Challenges & Learnings
              </h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-sm text-foreground/85 sm:text-base"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </AnimatedDiv>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage}
          alt={project.title}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </PageWrapper>
  );
}
