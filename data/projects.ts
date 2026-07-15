import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "world-cup-fantasy-predictor",
    title: "World Cup Fantasy Predictor",
    status: "Active live-tournament project",
    shortDescription:
      "A full-stack tournament analytics platform for match forecasts, player projections, and fantasy decision support.",
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
] satisfies readonly Project[];