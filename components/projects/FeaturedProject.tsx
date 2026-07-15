import Button from "@/components/ui/Button";
import ProjectTag from "@/components/ui/ProjectTag";
import type { Project } from "@/types/project";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <article className="rounded-lg border border-border-subtle bg-surface p-6">
      <p className="text-sm font-medium text-muted">
        {project.status}
      </p>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-muted">
        {project.shortDescription}
      </p>

      <ul className="mt-5 space-y-2 text-sm leading-6">
        {project.highlights.map((highlight) => (
          <li key={highlight}>• {highlight}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <ProjectTag key={technology}>
            {technology}
          </ProjectTag>
        ))}
      </div>

      <div className="mt-7">
        <Button href={project.caseStudyPath}>
          View Case Study
        </Button>
      </div>
    </article>
  );
}