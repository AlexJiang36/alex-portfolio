import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ContentCard from "@/components/ui/ContentCard";
import ProjectTag from "@/components/ui/ProjectTag";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Premier League FPL Predictor | Alex Jiang",
  description:
    "A full-stack football analytics and fantasy decision-support system for player forecasts, match predictions, transfer recommendations, and model evaluation.",
};

const technologies = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Alembic",
  "pandas",
  "scikit-learn",
  "Next.js",
  "TypeScript",
] as const;

const productAndSystemScope = [
  "Built a full-stack fantasy football analytics system with player forecasts, match predictions, squad recommendations, and transfer-planning workflows.",
  "Designed backend APIs for teams, players, predictions, model registry views, squad recommendations, and transfer recommendations.",
  "Implemented gameweek-aware data workflows so predictions and recommendations can be generated, inspected, and compared over time.",
  "Delivered the system through a FastAPI backend, PostgreSQL data layer, and Next.js frontend.",
] as const;

const dataAndFeaturePipelines = [
  "Built season-aware data exports for player features, match features, validation snapshots, and historical summaries.",
  "Added historical staging tables for previous-season teams, players, fixtures, and player gameweek statistics.",
  "Designed previous-season prior artifacts to support Pre-GW1 and early-season prediction workflows without leaking current-season outcomes.",
  "Separated raw historical identities, canonical current-season entities, feature exports, prediction previews, and validation reports.",
] as const;

const predictionAndRecommendationSystems = [
  "Implemented baseline and ridge-style player prediction workflows with repeatable feature exports and evaluation reports.",
  "Built match prediction and transfer recommendation surfaces to support fantasy decision-making across gameweeks.",
  "Added squad and transfer logic that respects player prices, positions, budget constraints, and current squad state.",
  "Started Pre-GW1 scaffolding for team priors, promoted-team fallback handling, match outcome previews, and scoreline previews.",
] as const;

const engineeringChallenges = [
  "Handling changing data across gameweeks while preserving stable prediction and recommendation outputs.",
  "Avoiding leakage when building previous-season priors and Pre-GW1 prediction workflows.",
  "Managing promotion and relegation, historical team identity, player identity mapping, and missing prior data.",
  "Keeping backend scripts, database state, generated artifacts, and frontend surfaces aligned as the project grew.",
] as const;

const evaluationAndJudgment = [
  "Evaluated model outputs using held-out gameweek actuals and tracked error metrics such as MAE for player predictions.",
  "Used model registry and validation scripts to compare model versions without mixing training, preview, and production outputs.",
  "Treated Pre-GW1 match and scoreline outputs as read-only scaffolding until proper backtesting, calibration, and safety contracts exist.",
  "Kept generated previews blocked from production writes until manifests, validation checks, and explicit readiness criteria pass.",
] as const;

const preGameweekOnePipeline = [
  "Built previous-season team-prior exports from historical staging tables.",
  "Audited team identity mappings and promotion and relegation cases before joining historical priors to current-season fixtures.",
  "Applied transparent fallback values for promoted teams rather than pretending they had previous-season Premier League priors.",
  "Generated read-only match outcome and scoreline previews with explicit production blockers and manifest validation.",
] as const;

const architectureSteps = [
  ["Premier League", "data"],
  ["Ingestion and", "validation"],
  ["PostgreSQL"],
  ["Feature exports", "and historical", "priors"],
  ["Model and", "recommendation", "services"],
  ["FastAPI"],
  ["Next.js"],
  ["Evaluation and", "safety checks"],
] as const;

const bodyTextClass = "type-body";

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

      <ul
        className={`mt-7 list-disc space-y-3 pl-6 ${bodyTextClass}`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ContentCard>
  );
}

type ArchitectureStepProps = {
  index: number;
  labelLines: readonly string[];
  className?: string;
};

function ArchitectureStep({
  index,
  labelLines,
  className = "",
}: ArchitectureStepProps) {
  return (
    <li
      className={`
        relative
        flex min-h-[104px] w-[190px]
        items-center justify-center
        rounded-xl border
        py-3 pl-12 pr-4
        shadow-[0_5px_14px_rgba(67,90,112,0.055)]
        ${className}
      `}
      style={{
        backgroundColor: "#f4f8fb",
        borderColor: "#bfd2e1",
      }}
    >
      <span
        className="
          absolute left-4 top-1/2
          flex size-8 -translate-y-1/2
          items-center justify-center
          rounded-full
          type-small font-bold
        "
        style={{
          backgroundColor: "#dbe8f2",
          color: "#2f4a62",
        }}
      >
        {index}
      </span>

      <span
        className="type-diagram-label block min-w-0 text-center"
        style={{ color: "#263f54" }}
      >
        {labelLines.map((line) => (
          <span
            key={line}
            className="block whitespace-nowrap"
          >
            {line}
          </span>
        ))}
      </span>
    </li>
  );
}

type FlowArrowProps = {
  direction: "right" | "left" | "down";
  className?: string;
};

function FlowArrow({
  direction,
  className = "",
}: FlowArrowProps) {
  const symbol =
    direction === "right"
      ? "→"
      : direction === "left"
        ? "←"
        : "↓";

  return (
    <li
      aria-hidden="true"
      className={`
        flex items-center justify-center
        text-2xl font-semibold
        ${className}
      `}
      style={{ color: "#6f879f" }}
    >
      {symbol}
    </li>
  );
}

function DesktopArchitectureFlow() {
  return (
    <ol
      className="
        mt-8 hidden w-full
        grid-cols-[190px_minmax(52px,1fr)_190px_minmax(52px,1fr)_190px_minmax(52px,1fr)_190px]
        grid-rows-[104px_44px_104px]
        xl:grid
      "
    >
      <ArchitectureStep
        index={1}
        labelLines={architectureSteps[0]}
        className="col-start-1 row-start-1 justify-self-start"
      />

      <FlowArrow
        direction="right"
        className="col-start-2 row-start-1"
      />

      <ArchitectureStep
        index={2}
        labelLines={architectureSteps[1]}
        className="col-start-3 row-start-1 justify-self-center"
      />

      <FlowArrow
        direction="right"
        className="col-start-4 row-start-1"
      />

      <ArchitectureStep
        index={3}
        labelLines={architectureSteps[2]}
        className="col-start-5 row-start-1 justify-self-center"
      />

      <FlowArrow
        direction="right"
        className="col-start-6 row-start-1"
      />

      <ArchitectureStep
        index={4}
        labelLines={architectureSteps[3]}
        className="col-start-7 row-start-1 justify-self-end"
      />

      <FlowArrow
        direction="down"
        className="col-start-7 row-start-2 justify-self-center"
      />

      <ArchitectureStep
        index={5}
        labelLines={architectureSteps[4]}
        className="col-start-7 row-start-3 justify-self-end"
      />

      <FlowArrow
        direction="left"
        className="col-start-6 row-start-3"
      />

      <ArchitectureStep
        index={6}
        labelLines={architectureSteps[5]}
        className="col-start-5 row-start-3 justify-self-center"
      />

      <FlowArrow
        direction="left"
        className="col-start-4 row-start-3"
      />

      <ArchitectureStep
        index={7}
        labelLines={architectureSteps[6]}
        className="col-start-3 row-start-3 justify-self-center"
      />

      <FlowArrow
        direction="left"
        className="col-start-2 row-start-3"
      />

      <ArchitectureStep
        index={8}
        labelLines={architectureSteps[7]}
        className="col-start-1 row-start-3 justify-self-start"
      />
    </ol>
  );
}

function MobileArchitectureFlow() {
  return (
    <ol className="mt-8 space-y-3 xl:hidden">
      {architectureSteps.map((step, index) => (
        <Fragment key={step.join("-")}>
          <ArchitectureStep
            index={index + 1}
            labelLines={step}
            className="mx-auto"
          />

          {index < architectureSteps.length - 1 && (
            <FlowArrow direction="down" className="h-8" />
          )}
        </Fragment>
      ))}
    </ol>
  );
}

function ArchitectureFlow() {
  return (
    <>
      <DesktopArchitectureFlow />
      <MobileArchitectureFlow />
    </>
  );
}

export default function FplPredictorPage() {
  return (
    <Container>
      <PortfolioShell>
        <div className="space-y-8">
          <ContentCard>
            <Link
              href="/projects"
              className="
                inline-flex items-center gap-2
                type-small font-medium
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
                className="type-eyebrow"
                style={{ color: "#58738d" }}
              >
                Full-Stack ML System · Football Analytics
              </p>

              <h1 className="type-page-title mt-3">
                Premier League FPL Predictor
              </h1>

              <div
                className={`mt-6 max-w-5xl space-y-5 ${bodyTextClass}`}
              >
                <p>
                  A full-stack football analytics and fantasy decision-support
                  system built to turn Premier League data into player
                  forecasts, match predictions, squad-planning tools, and
                  transfer recommendations.
                </p>

                <p>
                  The platform combines data ingestion, PostgreSQL-backed
                  feature pipelines, model training and evaluation workflows,
                  FastAPI prediction services, transfer-recommendation logic,
                  and a Next.js frontend for exploring fantasy decisions across
                  gameweeks.
                </p>
              </div>
            </div>

            <div className="mt-9 border-t border-border-subtle pt-8">
              <h2 className="type-subsection-title">
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

          <ContentCard>
            <SectionHeading>System Architecture</SectionHeading>

            <p
              className={`mt-7 max-w-5xl ${bodyTextClass}`}
            >
              Premier League data flows through ingestion and validation
              scripts into PostgreSQL. Feature pipelines generate player,
              match, and historical-prior datasets. Model and recommendation
              services produce player forecasts, match predictions, squad
              recommendations, and transfer options. FastAPI exposes the
              outputs to a Next.js frontend, while validation reports and
              manifest checks keep preview, evaluation, and production-ready
              artifacts clearly separated.
            </p>

            <ArchitectureFlow />
          </ContentCard>

          <div className="grid gap-8 xl:grid-cols-2">
            <DetailCard
              title="Product & System Scope"
              items={productAndSystemScope}
            />

            <DetailCard
              title="Data & Feature Pipelines"
              items={dataAndFeaturePipelines}
            />

            <DetailCard
              title="Prediction & Recommendation Systems"
              items={predictionAndRecommendationSystems}
            />

            <DetailCard
              title="Engineering Challenges"
              items={engineeringChallenges}
            />

            <DetailCard
              title="Evaluation & Engineering Judgment"
              items={evaluationAndJudgment}
            />

            <DetailCard
              title="Pre-GW1 Prediction Pipeline"
              items={preGameweekOnePipeline}
            />
          </div>
        </div>
      </PortfolioShell>
    </Container>
  );
}
