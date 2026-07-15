import Link from "next/link";

import { navigationItems } from "@/data/navigation";

export default function SiteNavigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}