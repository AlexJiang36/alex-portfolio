type ContentCardProps = {
  children: React.ReactNode;
  id?: string;
};

export default function ContentCard({
  children,
  id,
}: ContentCardProps) {
  return (
    <section
      id={id}
      className="
        rounded-2xl
        bg-surface
        p-6
        shadow-[0_12px_32px_rgba(24,24,27,0.07)]
        ring-1
        ring-black/[0.035]
        sm:p-8
      "
    >
      {children}
    </section>
  );
}