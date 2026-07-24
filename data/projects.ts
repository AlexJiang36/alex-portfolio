import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "world-cup-fantasy-predictor",
    title: "World Cup Fantasy Predictor",
    status: "Live ML System · Sports Analytics",
    shortDescription:
      "A full-stack ML system for live World Cup data, match and player forecasts, fantasy transfer decisions, and leakage-safe model evaluation.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
    highlights: [
      "Operated repeatable live-data refresh and validation workflows across a complete tournament.",
      "Preserved immutable pre-round snapshots for leakage-safe match and player evaluation.",
      "Built transfer planning, model-squad, Golden Boot, Team of the Round, and operations surfaces.",
    ],
    caseStudyPath: "/projects/world-cup-fantasy-predictor",
    featured: true,
  },
  {
    slug: "fpl-predictor",
    title: "Premier League FPL Predictor",
    status: "Full-Stack ML System · Football Analytics",
    shortDescription:
      "A full-stack ML and analytics system for Premier League player forecasts, match predictions, squad planning, transfer recommendations, and model evaluation.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
    highlights: [
      "Built season-aware data ingestion, historical staging, and feature-export pipelines.",
      "Implemented player and match prediction workflows with repeatable evaluation reports.",
      "Developed squad-planning and transfer-recommendation logic with budget and position constraints.",
    ],
    caseStudyPath: "/projects/fpl-predictor",
    featured: true,
  },
] satisfies readonly Project[];
