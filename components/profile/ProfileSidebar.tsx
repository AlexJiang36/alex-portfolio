import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  return (
    <aside aria-label="Profile">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
        {profile.role}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        {profile.name}
      </h1>

      <p className="mt-5 text-lg font-medium leading-7">
        {profile.headline}
      </p>
    </aside>
  );
}