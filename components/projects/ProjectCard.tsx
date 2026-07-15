import Button from "@/components/ui/Button";
import ProjectTag from "@/components/ui/ProjectTag";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border-subtle bg-surface p-5">
      <div className="mb-5 aspect-[16/10] rounded-md border border-border-subtle bg-background" />

      <p className="text-sm text-muted">
        {project.status}
      </p>

      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
        {project.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <ProjectTag key={technology}>
            {technology}
          </ProjectTag>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {project.caseStudyPath ? (
          <Button href={project.caseStudyPath}>
            View Project
          </Button>
        ) : (
          <p className="text-sm text-muted">
            Case study coming soon
          </p>
        )}
      </div>
    </article>
  );
}