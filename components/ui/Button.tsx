import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-md border border-border-subtle
        bg-transparent px-5 py-3
        text-sm font-medium text-foreground
        transition-colors
        hover:border-border-strong hover:bg-surface
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-border-strong
        focus-visible:ring-offset-2
        "
    >
      {children}
    </Link>
  );
}