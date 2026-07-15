import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "world-cup-fantasy-predictor",
    title: "World Cup Fantasy Predictor",
    status: "Live tournament analytics",
    shortDescription:
      "Match forecasts, player projections, and fantasy decision-support tools for a live international tournament.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
    highlights: [
      "Built repeatable live-data refresh and validation pipelines.",
      "Designed anti-leakage evaluation using pre-round projection snapshots.",
      "Developed transfer, squad-planning, Team of the Round, and Golden Boot tools.",
    ],
    caseStudyPath: "/projects/world-cup-fantasy-predictor",
    featured: true,
  },
  {
    slug: "fpl-predictor",
    title: "FPL Predictor",
    status: "Fantasy football analytics",
    shortDescription:
      "A full-stack platform for player predictions, match forecasts, squad planning, and transfer recommendations.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
    highlights: [
      "Built multi-season data ingestion and validation workflows.",
      "Developed player and match prediction models with evaluation pipelines.",
      "Implemented squad selection and transfer recommendation logic.",
    ],
    featured: true,
  },
] satisfies readonly Project[];