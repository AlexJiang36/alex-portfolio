import ProfileSidebar from "@/components/profile/ProfileSidebar";
import SiteNavigation from "@/components/layout/SiteNavigation";
import SplitLayout from "@/components/layout/SplitLayout";

type PortfolioShellProps = {
  children: React.ReactNode;
};

export default function PortfolioShell({
  children,
}: PortfolioShellProps) {
  return (
    <SplitLayout sidebar={<ProfileSidebar />}>
      <header className="mb-16 flex justify-end">
        <SiteNavigation />
      </header>

      {children}
    </SplitLayout>
  );
}