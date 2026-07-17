import ProfileSidebar from "@/components/profile/ProfileSidebar";
import SiteFooter from "@/components/layout/SiteFooter";
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
        <div className="min-w-0">
          {children}
          <SiteFooter />
        </div>
      </SplitLayout>
    </div>
  );
}
