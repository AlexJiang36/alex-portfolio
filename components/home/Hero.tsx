import Link from "next/link";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mb-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
        {profile.roles.join(" · ")}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>

      <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
        {profile.headline}
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        {profile.summary}
      </p>

      <p className="mt-4 max-w-3xl text-base font-medium leading-7">
        {profile.target}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="
            inline-flex items-center justify-center
            rounded-xl
            border border-border-subtle
            px-5 py-2.5
            text-sm font-medium
            transition-colors
            hover:bg-surface
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-foreground/20
          "
        >
          View Projects
        </Link>

        <Link
          href="/resume"
          className="
            inline-flex items-center justify-center
            rounded-xl
            border border-border-subtle
            px-5 py-2.5
            text-sm font-medium
            transition-colors
            hover:bg-surface
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-foreground/20
          "
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
