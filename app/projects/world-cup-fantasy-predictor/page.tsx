import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ContentCard from "@/components/ui/ContentCard";
import ProjectTag from "@/components/ui/ProjectTag";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "World Cup Fantasy Predictor | Alex Jiang",
  description:
    "A full-stack live ML and sports analytics system for match forecasts, player projections, fantasy decision support, and leakage-safe evaluation.",
};

const githubCaseStudyUrl =
  "https://github.com/AlexJiang36/world-cup-fantasy-predictor-case-study";

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

const architectureSteps = [
  ["Live data"],
  ["Ingestion and", "canonicalization"],
  ["PostgreSQL"],
  ["Prediction and", "decision services"],
  ["FastAPI"],
  ["Next.js"],
  ["Validation and", "evaluation"],
] as const;

const workflowSteps = [
  {
    title: "Freeze pre-round evidence",
    description:
      "Archive the predictions that existed before kickoff and register their model, run, coverage, and timestamp.",
  },
  {
    title: "Synchronize completed actuals",
    description:
      "Ingest completed match and player results, then rebuild canonical tournament state.",
  },
  {
    title: "Evaluate without leakage",
    description:
      "Score only the matching immutable snapshot rather than regenerating historical predictions after results are known.",
  },
  {
    title: "Generate the next horizon",
    description:
      "Create the next round of match forecasts and player projections from the updated state.",
  },
  {
    title: "Apply product safety contracts",
    description:
      "Adjust for actual usage, starter consistency, availability, elimination, scoring realism, and fantasy constraints.",
  },
  {
    title: "Validate and publish",
    description:
      "Archive the production snapshot, verify readiness, and only then refresh transfer, squad, evaluation, and Ops surfaces.",
  },
] as const;

const productSurfaces = [
  {
    title: "Match Predictions",
    description:
      "Outcome probabilities, scoreline forecasts, model metadata, and prediction history.",
  },
  {
    title: "Knockout Bracket",
    description:
      "A tournament forecast that separates regular-time outcomes from eventual advancement.",
  },
  {
    title: "Player Projections",
    description:
      "Fantasy-point forecasts with usage, availability, starter, and scoring-realism contracts.",
  },
  {
    title: "Transfer Targets",
    description:
      "General candidate rankings filtered through role, price, team, eligibility, and risk constraints.",
  },
  {
    title: "Model Squad",
    description:
      "Persisted confirmed squad state kept separate from newly generated transfer recommendations.",
  },
  {
    title: "Evaluation",
    description:
      "Leakage-safe match and player dashboards built from immutable pre-round evidence.",
  },
  {
    title: "Golden Boot & Team of the Round",
    description:
      "Tournament forecast and actuals-driven product views for top scorers and best-performing players.",
  },
  {
    title: "Operations",
    description:
      "Semantic lifecycle, freshness, provenance, and product-readiness status rather than HTTP health alone.",
  },
] as const;

const verifiedResults = [
  {
    value: "104 / 104",
    label: "Official fixtures covered",
    detail: "Valid pre-match outcome predictions across the full tournament.",
  },
  {
    value: "68.3%",
    label: "Overall outcome accuracy",
    detail: "Measured from preserved pre-match production evidence.",
  },
  {
    value: "81.3%",
    label: "Knockout outcome accuracy",
    detail: "Outcome performance across the knockout-stage fixtures.",
  },
  {
    value: "18.8%",
    label: "Exact-score accuracy",
    detail: "Across 32 knockout fixtures.",
  },
  {
    value: "1,775",
    label: "Player-round observations",
    detail: "Leakage-safe observations evaluated per production player model.",
  },
  {
    value: "0.281",
    label: "Ridge Spearman correlation",
    detail: "Compared with 0.207 for the rules baseline.",
  },
] as const;

const challengesAndLessons = [
  "A mutable `latest` artifact is useful for serving the current product, but it is not sufficient historical evidence.",
  "Prediction provenance must be stored and exposed as part of the API contract.",
  "Actual starts and minutes must override stale expected-starter assumptions.",
  "Raw model output requires domain and product safety contracts before it becomes decision support.",
  "Confirmed fantasy state must remain separate from generated recommendations.",
  "A valid tournament-complete state may contain zero future predictions and zero actionable transfers.",
  "Operations dashboards should communicate semantic state, freshness, and readiness—not only HTTP 200.",
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
        flex min-h-[88px] w-[190px]
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
        grid-rows-[88px_44px_88px]
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
                Live ML System · Sports Analytics
              </p>

              <h1 className="type-page-title mt-3">
                World Cup Fantasy Predictor
              </h1>

              <div
                className={`mt-6 max-w-5xl space-y-5 ${bodyTextClass}`}
              >
                <p>
                  A full-stack ML system for live World Cup data, match and
                  player forecasts, fantasy transfer decisions, and
                  leakage-safe model evaluation.
                </p>

                <p>
                  The platform combines live-data ingestion,
                  PostgreSQL-backed canonical state, prediction and evaluation
                  workflows, squad-planning tools, Golden Boot and Team of the
                  Round products, and operational validation across the full
                  tournament lifecycle.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={githubCaseStudyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl border
                    bg-white
                    px-5 py-2.5
                    text-sm font-medium
                    transition-[background-color,border-color,transform,box-shadow]
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-background
                    hover:shadow-sm
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                  "
                  style={{
                    borderColor: "#cfd3d7",
                    color: "#18181b",
                  }}
                >
                  GitHub Case Study
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              </div>

              <p className="type-body mt-5 w-full">
                The production source repository remains private. The public
                case study documents the architecture, data and ML workflows,
                evaluation methodology, screenshots, verified results,
                limitations, and engineering retrospective without exposing
                private source code or operational data.
              </p>
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
            <SectionHeading>Product Overview</SectionHeading>

            <div className={`mt-7 max-w-5xl space-y-5 ${bodyTextClass}`}>
              <p>
                This project was operated across a complete international
                football tournament rather than built as a static model demo.
                Each round changed the fixtures, eligible players, transfer
                rules, evaluation window, and next prediction horizon.
              </p>

              <p>
                The engineering focus was therefore broader than forecast
                accuracy: preserve trustworthy state, maintain prediction
                provenance, evaluate only pre-match evidence, and ensure that
                every product surface reflected the current tournament
                lifecycle.
              </p>
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Engineering Architecture</SectionHeading>

            <p
              className={`mt-7 max-w-5xl ${bodyTextClass}`}
            >
              Live tournament data flows through ingestion and
              canonicalization services into PostgreSQL. Feature, prediction,
              evaluation, and fantasy-decision services generate versioned
              artifacts. FastAPI exposes the resulting contracts to a Next.js
              frontend, while immutable snapshots and validation checks support
              leakage-safe evaluation and operational reliability.
            </p>

            <ArchitectureFlow />
          </ContentCard>

          <ContentCard>
            <SectionHeading>Data & ML Workflow</SectionHeading>

            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {workflowSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="
                    rounded-xl border
                    p-5
                    shadow-[0_5px_14px_rgba(67,90,112,0.045)]
                  "
                  style={{
                    backgroundColor: "#f8fafc",
                    borderColor: "#d5e0e8",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="
                        flex size-8 shrink-0 items-center justify-center
                        rounded-full text-sm font-bold
                      "
                      style={{
                        backgroundColor: "#dbe8f2",
                        color: "#2f4a62",
                      }}
                    >
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="type-compact-title">
                        {step.title}
                      </h3>
                      <p className="type-supporting mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Key Product Surfaces</SectionHeading>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {productSurfaces.map((surface) => (
                <article
                  key={surface.title}
                  className="
                    rounded-xl border
                    p-5
                    shadow-[0_5px_14px_rgba(67,90,112,0.045)]
                  "
                  style={{
                    backgroundColor: "#f8fafc",
                    borderColor: "#d5e0e8",
                  }}
                >
                  <h3 className="type-compact-title">
                    {surface.title}
                  </h3>
                  <p className="type-supporting mt-2">
                    {surface.description}
                  </p>
                </article>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Final Verified Results</SectionHeading>

            <p className={`mt-7 max-w-5xl ${bodyTextClass}`}>
              Final metrics were calculated from preserved pre-match evidence.
              Player metrics describe ranking and error behavior rather than a
              claim that exact fantasy-point forecasting was solved.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {verifiedResults.map((result) => (
                <article
                  key={result.label}
                  className="
                    rounded-xl border
                    p-5
                    shadow-[0_5px_14px_rgba(67,90,112,0.045)]
                  "
                  style={{
                    backgroundColor: "#f8fafc",
                    borderColor: "#d5e0e8",
                  }}
                >
                  <p
                    className="type-metric"
                    style={{ color: "#2f4a62" }}
                  >
                    {result.value}
                  </p>
                  <h3 className="type-compact-title mt-3">
                    {result.label}
                  </h3>
                  <p className="type-supporting mt-2">
                    {result.detail}
                  </p>
                </article>
              ))}
            </div>
          </ContentCard>

          <DetailCard
            title="Challenges & Lessons"
            items={challengesAndLessons}
          />

        </div>
      </PortfolioShell>
    </Container>
  );
}
