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

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            A collection of software engineering, data, and machine-learning
            projects I have built.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
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