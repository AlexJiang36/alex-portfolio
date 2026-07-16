import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ProjectCard from "@/components/projects/ProjectCard";
import EducationSkills from "@/components/sections/EducationSkills";
import ContentCard from "@/components/ui/ContentCard";
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
        <div className="space-y-8">
          <ContentCard>
            <SectionHeading>About Me</SectionHeading>

            <p className="mt-6 max-w-3xl text-xl font-medium leading-8">
              {profile.headline}
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              {profile.summary}
            </p>

            <p className="mt-4 max-w-3xl text-base font-medium leading-7">
              {profile.target}
            </p>
          </ContentCard>

          <EducationSkills />

          <ContentCard>
            <SectionHeading>Featured Projects</SectionHeading>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
            </div>
          </ContentCard>
        </div>
      </PortfolioShell>
    </Container>
  );
}