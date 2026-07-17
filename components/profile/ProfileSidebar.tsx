import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  return (
    <aside
      aria-label="Profile"
      className="
        min-h-[620px]
        rounded-2xl
        bg-surface
        p-8
        shadow-[0_12px_32px_rgba(24,24,27,0.07)]
        ring-1
        ring-black/[0.035]
        lg:min-h-[680px]
      "
    >
      <div className="text-center">
        <div
          aria-hidden="true"
          className="
            mx-auto
            flex size-36 items-center justify-center
            rounded-2xl
            bg-background
            text-2xl font-semibold text-muted
            shadow-sm
            ring-1 ring-black/[0.05]
          "
        >
          AJ
        </div>

        <h1 className="mt-9 text-4xl font-semibold tracking-tight">
          {profile.name}
        </h1>

        <div className="mt-5 space-y-1 text-base leading-7 text-muted">
          {profile.roles.map((role) => (
            <p key={role} className="whitespace-nowrap">
              {role}
            </p>
          ))}
        </div>
      </div>

      <div className="my-8 border-t border-border-subtle" />

      <dl className="space-y-6">
        <div>
          <dt className="text-base font-semibold text-foreground">
            Location
          </dt>
          <dd className="mt-1 text-base leading-7 text-muted">
            {profile.location}
          </dd>
        </div>

        <div>
          <dt className="text-base font-semibold text-foreground">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${profile.email}`}
              className="
                whitespace-nowrap
                text-base leading-7 text-muted
                transition-colors
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-foreground/20
              "
            >
              {profile.email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-base font-semibold text-foreground">
            GitHub
          </dt>
          <dd className="mt-1">
            <a
              href={profile.github.href}
              target="_blank"
              rel="noreferrer"
              className="
                text-base leading-7 text-muted
                transition-colors
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-foreground/20
              "
            >
              {profile.github.label} ↗
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-base font-semibold text-foreground">
            LinkedIn
          </dt>
          <dd className="mt-1">
            <a
              href={profile.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="
                text-base leading-7 text-muted
                transition-colors
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-foreground/20
              "
            >
              {profile.linkedin.label} ↗
            </a>
          </dd>
        </div>
      </dl>
    </aside>
  );
}
