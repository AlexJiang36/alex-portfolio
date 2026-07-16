import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  return (
    <aside
      aria-label="Profile"
      className="
        rounded-2xl
        bg-surface
        p-6
        shadow-[0_12px_32px_rgba(24,24,27,0.07)]
        ring-1
        ring-black/[0.035]
        sm:p-7
      "
    >
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          {profile.name}
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted">
          {profile.role}
        </p>
      </div>
    </aside>
  );
}