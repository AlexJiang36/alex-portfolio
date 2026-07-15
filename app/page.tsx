import Container from "@/components/layout/Container";
import SiteNavigation from "@/components/layout/SiteNavigation";
import SplitLayout from "@/components/layout/SplitLayout";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Button from "@/components/ui/Button";
import ProjectTag from "@/components/ui/ProjectTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <Container>
      <SplitLayout sidebar={<ProfileSidebar />}>
        <header className="mb-16 flex justify-end">
          <SiteNavigation />
        </header>

        <section id="about" className="mb-24 scroll-mt-8">
          <SectionHeading>About Me</SectionHeading>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {profile.summary}
          </p>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7">
            {profile.target}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href="/resume.pdf">Resume</Button>
          </div>
        </section>

        <section id="projects" className="mb-24 scroll-mt-8">
          <SectionHeading>Featured Projects</SectionHeading>

          <div className="mt-6 flex flex-wrap gap-3">
            <ProjectTag>Python</ProjectTag>
            <ProjectTag>FastAPI</ProjectTag>
            <ProjectTag>PostgreSQL</ProjectTag>
            <ProjectTag>Next.js</ProjectTag>
          </div>

          <p className="mt-6 text-lg">World Cup Fantasy Predictor</p>
        </section>

        <section id="contact" className="scroll-mt-8">
          <SectionHeading>Contact</SectionHeading>

          <p className="mt-6 text-lg text-muted">
            GitHub · LinkedIn · Email
          </p>
        </section>
      </SplitLayout>
    </Container>
  );
}