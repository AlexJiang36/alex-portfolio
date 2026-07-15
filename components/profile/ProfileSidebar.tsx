import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  return (
    <aside aria-label="Profile">
      <h1 className="text-4xl font-semibold tracking-tight">
        {profile.name}
      </h1>

      <p className="mt-3 text-base leading-7 text-muted">
        {profile.role}
      </p>
    </aside>
  );
}