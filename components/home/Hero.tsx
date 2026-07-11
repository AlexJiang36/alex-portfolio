import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mb-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
        {profile.role}
    </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
        </h1>

        <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        {profile.headline}
        </h2>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
        {profile.summary}
        </p>

        <p className="mt-4 max-w-2xl text-base font-medium text-foreground">
        {profile.target}
        </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="#projects">View Projects</Button>
        <Button href="/resume.pdf">Resume</Button>
      </div>
    </section>
  );
}