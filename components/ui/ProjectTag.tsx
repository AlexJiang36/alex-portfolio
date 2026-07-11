type ProjectTagProps = {
  children: React.ReactNode;
};

export default function ProjectTag({ children }: ProjectTagProps) {
  return (
    <span className="inline-flex rounded-full border border-border-subtle bg-transparent px-3 py-1 text-sm font-medium text-muted">
      {children}
    </span>
  );
}