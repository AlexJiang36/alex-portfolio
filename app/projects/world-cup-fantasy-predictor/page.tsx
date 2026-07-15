import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ProjectTag from "@/components/ui/ProjectTag";
import { worldCupCaseStudy } from "@/data/worldCupCaseStudy";

export const metadata: Metadata = {
  title: `${worldCupCaseStudy.title} | Alex Jiang`,
  description: worldCupCaseStudy.summary,
};

export default function WorldCupFantasyPredictorPage() {
  const [overviewSection, ...detailSections] =
    worldCupCaseStudy.sections;

  return (
    <Container>
      <PortfolioShell>
        <article>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back to projects
          </Link>

          <header className="mt-8">
            <h1 className="text-4xl font-semibold tracking-tight">
              {worldCupCaseStudy.title}
            </h1>

            <p className="mt-5 max-w-3xl text-xl leading-8">
              {worldCupCaseStudy.summary}
            </p>

            {overviewSection?.paragraphs && (
              <div className="mt-6 space-y-4">
                {overviewSection.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-3xl text-lg leading-8 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <h2 className="mt-8 text-xl font-semibold">
              Tech Stack
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {worldCupCaseStudy.technologies.map((technology) => (
                <ProjectTag key={technology}>
                  {technology}
                </ProjectTag>
              ))}
            </div>
          </header>

          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {detailSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                {section.paragraphs && (
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-7 text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-base leading-7"
                      >
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="mt-16 border-t border-border-subtle pt-6 text-sm leading-6 text-muted">
            {worldCupCaseStudy.sourceNote}
          </p>
        </article>
      </PortfolioShell>
    </Container>
  );
}