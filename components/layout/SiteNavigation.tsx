"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";

export default function SiteNavigation() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav aria-label="Primary navigation">
      <ul
        className="
          flex flex-wrap items-center gap-2
          rounded-2xl
          bg-surface/90
          p-1.5
          text-sm font-medium
          shadow-[0_8px_24px_rgba(24,24,27,0.045)]
          ring-1 ring-black/[0.035]
          backdrop-blur-sm
        "
      >
        {navigationItems.map((item) => {
          const active = isActive(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  inline-flex items-center justify-center
                  rounded-xl
                  px-4 py-2
                  transition-[background-color,color,transform,box-shadow]
                  duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent/30
                  ${
                    active
                      ? "bg-accent-soft text-foreground shadow-sm ring-1 ring-accent-border"
                      : "text-muted hover:-translate-y-0.5 hover:bg-accent-soft/60 hover:text-foreground"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
