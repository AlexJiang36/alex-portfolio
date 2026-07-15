import type { CaseStudy } from "@/types/caseStudy";

export const worldCupCaseStudy = {
  slug: "world-cup-fantasy-predictor",
  title: "World Cup Fantasy Predictor",
  status: "Active live-tournament project",
  summary:
    "A full-stack live tournament analytics platform for match forecasts, player projections, and fantasy decision support.",
  technologies: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "pandas",
    "Next.js",
    "TypeScript",
  ],
  sourceNote:
    "The working source repository remains private while live tournament refreshes are ongoing. This page presents public-safe architecture, methodology, and engineering decisions.",
  sections: [
  {
  id: "overview",
  title: "Overview",
  paragraphs: [
    "The system combines live-data ingestion, database-backed prediction pipelines, evaluation checkpoints, and user-facing tools for transfers, squad planning, Team of the Round, and Golden Boot tracking.",
  ],
},
  {
    id: "what-i-built",
    title: "What I Built",
    bullets: [
      "Match and player prediction pipelines",
      "Transfer recommendations and model squad planning",
      "Team of the Round and Golden Boot tracking",
      "Live refresh validation and operational monitoring",
    ],
  },
  {
  id: "challenges",
  title: "Challenges",
  bullets: [
    "Keeping match, player, squad, and transfer outputs synchronized after each live refresh.",
    "Preventing low-usage or unavailable players from receiving unrealistic projections.",
    "Evaluating model changes honestly with limited knockout-round samples.",
  ],
},
  {
    id: "engineering-highlights",
    title: "Engineering Highlights",
    bullets: [
      "Saved pre-round projection snapshots to evaluate models without post-match data leakage.",
      "Built repeatable refresh and validation workflows for live tournament updates.",
      "Added player-usage checks using actual starts, minutes, availability, and realistic scoring expectations.",
    ],
  },
  {
    id: "evaluation",
    title: "Evaluation & Limitations",
    paragraphs: [
      "Early knockout-round checkpoints produced mixed results: the base projection performed better on exact-point error, while the adjusted score showed modestly better shortlist behavior.",
      "Because knockout samples are small, I treated these results as evidence for continued evaluation rather than proof that every production adjustment improved the model.",
    ],
  },
],
  
} satisfies CaseStudy;