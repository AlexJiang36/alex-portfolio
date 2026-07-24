import Link from "next/link";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="mb-24">
      <p className="type-eyebrow text-muted">
        {profile.roles.join(" · ")}
      </p>

      <h1 className="type-page-title mt-4">
        {profile.name}
      </h1>

      <p className="type-section-title mt-6 max-w-3xl">
        {profile.headline}
      </p>

      <p className="type-body mt-6 max-w-3xl">
        {profile.summary}
      </p>

      <p className="type-supporting mt-4 max-w-3xl font-medium">
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
