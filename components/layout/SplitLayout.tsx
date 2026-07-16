type SplitLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function SplitLayout({
  sidebar,
  children,
}: SplitLayoutProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[270px_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-8 lg:self-start">
        {sidebar}
      </div>

      <div className="min-w-0">{children}</div>
    </div>
  );
}