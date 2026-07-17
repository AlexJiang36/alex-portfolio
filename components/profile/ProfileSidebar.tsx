import Image from "next/image";

import { profile } from "@/data/profile";

type IconName = "location" | "email" | "github" | "linkedin";

type ContactIconProps = {
  name: IconName;
};

function ContactIcon({ name }: ContactIconProps) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "location") {
    return (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...commonProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3.7 5.1 5.1 0 0 0 19.1 0S18 0 15 2a13.4 13.4 0 0 0-7 0C5 0 3.9 0 3.9 0a5.1 5.1 0 0 0-.2 3.7A5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8h.01" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
      <path d="M12 11v5" />
    </svg>
  );
}

type ContactRowProps = {
  icon: IconName;
  label: string;
  children: React.ReactNode;
};

function ContactRow({
  icon,
  label,
  children,
}: ContactRowProps) {
  return (
    <div className="grid grid-cols-[44px_minmax(0,1fr)] gap-4">
      <div
        className="
          flex size-11 items-center justify-center
          rounded-xl
          border
        "
        style={{
          backgroundColor: "#eef4f9",
          borderColor: "#c8d8e5",
          color: "#58738d",
        }}
      >
        <ContactIcon name={icon} />
      </div>

      <div className="min-w-0">
        <dt className="text-sm font-semibold text-foreground">
          {label}
        </dt>

        <dd className="mt-1 text-[17px] leading-7 text-foreground/90">
          {children}
        </dd>
      </div>
    </div>
  );
}

const linkClassName = `
  inline-flex items-center gap-1
  transition-[color,transform]
  duration-200
  hover:translate-x-0.5
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
`;

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
          className="
            relative
            mx-auto
            size-40
            overflow-hidden
            rounded-2xl
            bg-background
            shadow-sm
            ring-1 ring-black/[0.05]
          "
        >
          <Image
            src="/images/profile-camera.jpg"
            alt="Alex Jiang holding a camera"
            fill
            priority
            sizes="160px"
            className="object-cover"
          />
        </div>

        <h1 className="mt-9 text-4xl font-semibold tracking-tight">
          {profile.name}
        </h1>

        <div className="mt-5 space-y-1 text-[17px] leading-7 text-foreground/90">
          {profile.roles.map((role) => (
            <p key={role} className="whitespace-nowrap">
              {role}
            </p>
          ))}
        </div>
      </div>

      <div className="my-8 border-t border-border-subtle" />

      <dl className="space-y-6">
        <ContactRow icon="location" label="Location">
          {profile.location}
        </ContactRow>

        <ContactRow icon="email" label="Email">
          <a
            href={`mailto:${profile.email}`}
            className={`${linkClassName} whitespace-nowrap`}
          >
            {profile.email}
          </a>
        </ContactRow>

        <ContactRow icon="github" label="GitHub">
          <a
            href={profile.github.href}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            {profile.github.label}
            <span aria-hidden="true">↗</span>
          </a>
        </ContactRow>

        <ContactRow icon="linkedin" label="LinkedIn">
          <a
            href={profile.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            {profile.linkedin.label}
            <span aria-hidden="true">↗</span>
          </a>
        </ContactRow>
      </dl>
    </aside>
  );
}
