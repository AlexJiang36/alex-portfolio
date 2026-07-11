import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectTag from "@/components/ui/ProjectTag";
export default function Home() {
  return (
    <Container>
      <section className="mb-24">
        <h1 className="text-5xl font-semibold tracking-tight">
          Alex Jiang
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
          Software Engineer building full-stack data products.
        </p>
            <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#projects">
                    View Projects
                </Button>

                <Button href="#">Resume</Button>
            </div>
      </section>

      <section className="mb-24">
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