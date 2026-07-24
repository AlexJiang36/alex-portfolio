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

            <div className="mt-6 space-y-4">
              <p className="type-body-strong">
                {profile.headline}
              </p>

              <p className="type-body">
                {profile.summary}
              </p>

              <p className="type-body">
                {profile.target}
              </p>
            </div>
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
