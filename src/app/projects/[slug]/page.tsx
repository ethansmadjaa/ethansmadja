import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetailContent } from "@/components/pages/project-detail-content";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://ethansmadja.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Ethan Smadja`,
      description: project.description,
      url: `https://ethansmadja.com/projects/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://ethansmadja.com" },
          { name: "Projects", url: "https://ethansmadja.com/projects" },
          { name: project.title, url: `https://ethansmadja.com/projects/${project.slug}` },
        ]}
      />
      <ProjectDetailContent project={project} />
    </>
  );
}
