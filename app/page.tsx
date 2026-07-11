import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectTag from "@/components/ui/ProjectTag";
import Hero from "@/components/home/Hero";
export default function Home() {
  return (
    <Container>
      <Container>
        <Hero />

       
      </Container>

      <section id="projects" className="mb-24 scroll-mt-8">
        <SectionHeading>Featured Projects</SectionHeading>
        <div className="mt-6 flex gap-3">
            <ProjectTag>Python</ProjectTag>
            <ProjectTag>FastAPI</ProjectTag>
            <ProjectTag>PostgreSQL</ProjectTag>
            <ProjectTag>Next.js</ProjectTag>
        </div>

        <p className="mt-6 text-lg">
          World Cup Fantasy Predictor
        </p>
      </section>

      <section className="mb-24">
        <SectionHeading>About</SectionHeading>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          I am a software engineer with a background in data science and
          statistics.
        </p>
      </section>

      <section>
        <SectionHeading>Contact</SectionHeading>

        <p className="mt-6 text-lg text-muted">
          GitHub · LinkedIn · Email
        </p>
      </section>
    </Container>
  );
}