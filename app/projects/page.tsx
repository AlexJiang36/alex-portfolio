import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <PortfolioShell>
        <section>
          <SectionHeading>Projects</SectionHeading>

          <p className="type-body mt-6 text-pretty">
            A collection of software engineering, data, and machine-learning
            projects I have built.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      </PortfolioShell>
    </Container>
  );
}
