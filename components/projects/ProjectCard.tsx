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
        group
        flex h-full min-h-[350px] flex-col
        rounded-2xl
        bg-surface
        p-7
        shadow-[0_10px_28px_rgba(24,24,27,0.06)]
        ring-1 ring-black/[0.045]
        transition-[transform,box-shadow]
        duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-[0_18px_42px_rgba(67,90,112,0.14)]
      "
      style={{
        borderTop: "3px solid #d7e5f0",
      }}
    >
      {project.image && (
        <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="
              object-cover
              transition-transform duration-300 ease-out
              group-hover:scale-[1.02]
            "
          />
        </div>
      )}

      <p
        className="
          text-xs
          font-semibold uppercase
          tracking-[0.12em]
        "
        style={{ color: "#58738d" }}
      >
        {project.status}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance">
        {project.title}
      </h2>

      <p className="mt-4 text-[17px] leading-8 text-foreground/90 text-pretty">
        {project.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <span
            key={technology}
            className="
              rounded-lg
              border
              px-3 py-1.5
              text-xs
              font-semibold
              tracking-wide
              transition-[background-color,border-color]
              duration-200
            "
            style={{
              backgroundColor: "#eef4f9",
              borderColor: "#c8d8e5",
              color: "#405b73",
            }}
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
              border
              bg-white
              px-5 py-2.5
              text-sm font-medium
              transition-[background-color,border-color,transform,box-shadow]
              duration-200
              hover:-translate-y-0.5
              hover:bg-background
              hover:shadow-sm
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-offset-2
            "
            style={{
              borderColor: "#cfd3d7",
              color: "#18181b",
            }}
          >
            View Project
          </Link>
        ) : (
          <p className="py-2.5 text-base text-foreground/85">
            Case study coming soon
          </p>
        )}
      </div>
    </article>
  );
}
