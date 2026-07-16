import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        flex min-h-[360px] flex-col
        rounded-2xl
        bg-background
        p-7
        shadow-[0_10px_28px_rgba(24,24,27,0.055)]
        ring-1
        ring-black/[0.04]
      "
    >
      {project.image && (
        <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <h3 className="text-2xl font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-muted">
        {project.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <span
            key={technology}
            className="
              rounded-md
              border border-border-subtle
              bg-surface
              px-3 py-1
              text-[11px]
              font-medium
              tracking-wide
              text-muted
            "
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        {project.caseStudyPath ? (
          <Link
            href={project.caseStudyPath}
            className="
              inline-flex min-w-32 items-center justify-center
              rounded-xl
              border border-border-subtle
              px-5 py-2.5
              text-sm font-medium
              transition-colors
              hover:bg-surface
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-foreground/20
            "
          >
            View Project
          </Link>
        ) : (
          <p className="py-2.5 text-sm text-muted">
            Case study coming soon
          </p>
        )}
      </div>
    </article>
  );
}