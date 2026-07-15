type SplitLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function SplitLayout({
  sidebar,
  children,
}: SplitLayoutProps) {
  return (
    <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-20">
      <div className="lg:sticky lg:top-16 lg:self-start">
        {sidebar}
      </div>

      <div>{children}</div>
    </div>
  );
}