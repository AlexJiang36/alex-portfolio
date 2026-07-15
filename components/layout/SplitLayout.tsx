type SplitLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function SplitLayout({
  sidebar,
  children,
}: SplitLayoutProps) {
  return (
    <div className="grid gap-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-24">
      <div className="lg:sticky lg:top-16 lg:self-start">
        {sidebar}
      </div>

      <div className="min-w-0">{children}</div>
    </div>
  );
}