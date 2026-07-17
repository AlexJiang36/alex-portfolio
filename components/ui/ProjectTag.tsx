type ProjectTagProps = {
  children: React.ReactNode;
};

export default function ProjectTag({
  children,
}: ProjectTagProps) {
  return (
    <span
      className="
        inline-flex items-center
        rounded-full
        border
        px-3.5 py-1.5
        text-sm font-semibold
      "
      style={{
        backgroundColor: "#eef4f9",
        borderColor: "#c8d8e5",
        color: "#405b73",
      }}
    >
      {children}
    </span>
  );
}
