import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ContentCard from "@/components/ui/ContentCard";
import ProjectTag from "@/components/ui/ProjectTag";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "World Cup Fantasy Predictor | Alex Jiang",
  description:
    "A full-stack live tournament analytics platform for match forecasts, player projections, fantasy decision support, and leakage-safe evaluation.",
};

const technologies = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "pandas",
  "Next.js",
  "TypeScript",
] as const;

const whatIBuilt = [
  "Match and player prediction pipelines",
  "Transfer recommendations and model squad planning",
  "Team of the Round and Golden Boot tracking",
  "Live refresh validation and operational monitoring",
] as const;

const challenges = [
  "Keeping match, player, squad, and transfer outputs synchronized after each live refresh.",
  "Preventing low-usage or unavailable players from receiving unrealistic projections.",
  "Evaluating model changes honestly with limited knockout-round samples.",
] as const;

const engineeringHighlights = [
  "Saved pre-round projection snapshots so models can be evaluated without post-match data leakage.",
  "Built repeatable refresh and validation workflows for live tournament updates.",
  "Added player-usage checks using actual starts, minutes, availability, and realistic scoring expectations.",
] as const;

const evaluationAndLimitations = [
  "Evaluation uses archived pre-round predictions and completed actuals rather than regenerated historical outputs.",
  "Knockout-stage samples are small and noisy, so results are presented as checkpoints rather than proof of reliable model superiority.",
  "Transfer recommendations are decision support and still require manual review for late lineup and availability news.",
] as const;

type DetailCardProps = {
  title: string;
  items: readonly string[];
};

function DetailCard({
  title,
  items,
}: DetailCardProps) {
  return (
    <ContentCard>
      <SectionHeading>{title}</SectionHeading>

      <ul className="mt-7 list-disc space-y-3 pl-6 text-[17px] leading-8 text-foreground/90">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ContentCard>
  );
}

export default function WorldCupFantasyPredictorPage() {
  return (
    <Container>
      <PortfolioShell>
        <div className="space-y-8">
          <ContentCard>
            <Link
              href="/projects"
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                text-foreground/75
                transition-[color,transform]
                duration-200
                hover:-translate-x-0.5
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-offset-2
              "
            >
              <span aria-hidden="true">←</span>
              Back to projects
            </Link>

            <div className="mt-8">
              <p
                className="
                  text-xs
                  font-semibold uppercase
                  tracking-[0.12em]
                "
                style={{ color: "#58738d" }}
              >
                Live tournament analytics
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance">
                World Cup Fantasy Predictor
              </h1>

              <div className="mt-6 max-w-5xl space-y-5 text-[18px] leading-8 text-foreground/90">
                <p>
                  A full-stack live tournament analytics platform for match
                  forecasts, player projections, and fantasy decision support.
                </p>

                <p>
                  The system combines live-data ingestion, database-backed
                  prediction pipelines, evaluation checkpoints, and user-facing
                  tools for transfers, squad planning, Team of the Round, and
                  Golden Boot tracking.
                </p>
              </div>
            </div>

            <div className="mt-9 border-t border-border-subtle pt-8">
              <h2 className="text-xl font-semibold">
                Tech Stack
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <ProjectTag key={technology}>
                    {technology}
                  </ProjectTag>
                ))}
              </div>
            </div>
          </ContentCard>

          <div className="grid gap-8 xl:grid-cols-2">
            <DetailCard
              title="What I Built"
              items={whatIBuilt}
            />

            <DetailCard
              title="Challenges"
              items={challenges}
            />

            <DetailCard
              title="Engineering Highlights"
              items={engineeringHighlights}
            />

            <DetailCard
              title="Evaluation & Limitations"
              items={evaluationAndLimitations}
            />
          </div>
        </div>
      </PortfolioShell>
    </Container>
  );
}
