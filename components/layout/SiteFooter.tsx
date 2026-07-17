import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer
      className="
        mt-8
        flex flex-col gap-3
        border-t border-border-subtle
        pt-6
        text-sm text-muted
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <p>© {new Date().getFullYear()} Alex Jiang</p>

      <nav
        aria-label="Footer links"
        className="flex flex-wrap gap-x-5 gap-y-2"
      >
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-foreground"
        >
          Email
        </a>

        <a
          href={profile.github.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>

        <a
          href={profile.linkedin.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}
