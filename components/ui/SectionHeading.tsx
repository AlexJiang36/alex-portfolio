type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="type-section-title">
        {children}
      </h2>

      <span
        aria-hidden="true"
        className="mt-4 block h-[4px] w-12 rounded-full"
        style={{ backgroundColor: "#6f879f" }}
      />
    </div>
  );
}
