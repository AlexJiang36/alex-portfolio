import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  return (
    <Container>
      <PortfolioShell>
        <section className="mb-24">
          <SectionHeading>About Me</SectionHeading>

            <p className="mt-6 max-w-2xl text-xl font-medium leading-8">
            {profile.headline}
            </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            {profile.summary}
          </p>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7">
            {profile.target}
          </p>
        </section>

        <section>
          <SectionHeading>Featured Projects</SectionHeading>

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