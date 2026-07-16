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
    <div>
      <header className="mb-6 flex justify-end lg:mb-8">
        <SiteNavigation />
      </header>

      <SplitLayout sidebar={<ProfileSidebar />}>
        {children}
      </SplitLayout>
    </div>
  );
}