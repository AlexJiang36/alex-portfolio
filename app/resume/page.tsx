import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import PortfolioShell from "@/components/layout/PortfolioShell";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  detailedEducation,
  earlierExperience,
  experience,
  leadership,
  professionalSummary,
  selectedPublications,
  skillGroups,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Alex Jiang",
  description:
    "Professional experience, education, publications, and technical skills of Alex Jiang.",
};

export default function ResumePage() {
  return (
    <Container>
      <PortfolioShell>
        <div className="space-y-8">
          <ContentCard>
            <SectionHeading>Resume</SectionHeading>

            <div className="mt-6 space-y-4">
              {professionalSummary.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Technical Skills</SectionHeading>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-lg font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-md
                          border border-border-subtle
                          bg-surface
                          px-3 py-1.5
                          text-sm
                          font-medium
                          text-muted
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Professional Experience</SectionHeading>

            <div className="mt-8 space-y-12">
              {experience.map((item) => (
                <article
                  key={`${item.organization}-${item.role}`}
                  className="space-y-5"
                >
                  <header className="grid gap-3 md:grid-cols-[minmax(0,1fr)_22rem] md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {item.organization}
                      </p>
                    </div>

                    <div className="text-sm text-muted md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 border-t border-border-subtle pt-8">
              <h3 className="text-xl font-semibold">
                Earlier Experience
              </h3>

              <div className="mt-7 space-y-8">
                {earlierExperience.map((item) => (
                  <article
                    key={`${item.organization}-${item.role}`}
                    className="space-y-4"
                  >
                    <header className="grid gap-3 md:grid-cols-[minmax(0,1fr)_22rem] md:items-start">
                      <div>
                        <h4 className="text-lg font-semibold">
                          {item.role}
                        </h4>

                        <p className="mt-1 text-sm text-muted">
                          {item.organization}
                        </p>
                      </div>

                      <div className="text-sm text-muted md:whitespace-nowrap md:text-right">
                        <p>{item.period}</p>
                        <p className="mt-1">{item.location}</p>
                      </div>
                    </header>

                    <p className="text-base leading-7 text-muted">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Education</SectionHeading>

            <div className="mt-8 space-y-10">
              {detailedEducation.map((item) => (
                <article
                  key={`${item.institution}-${item.degree}`}
                  className="space-y-4"
                >
                  <header className="grid gap-3 md:grid-cols-[minmax(0,1fr)_22rem] md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {item.institution}
                      </p>
                    </div>

                    <div className="text-sm text-muted md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <p className="text-base leading-7 text-muted">
                    {item.details}
                  </p>
                </article>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Selected Publications</SectionHeading>

            <div className="mt-8 space-y-7">
              {selectedPublications.map((publication) => (
                <article
                  key={publication.href}
                  className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="min-w-0">
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-medium leading-7 transition-opacity hover:opacity-65"
                    >
                      {publication.title} ↗
                    </a>

                    <p className="mt-1 text-sm text-muted">
                      {publication.journal}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm text-muted sm:text-right">
                    {publication.year}
                  </p>
                </article>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Leadership & Mentoring</SectionHeading>

            <div className="mt-8 space-y-6">
              {leadership.map((item) => (
                <article
                  key={`${item.organization}-${item.role}`}
                  className="space-y-4"
                >
                  <header className="grid gap-3 md:grid-cols-[minmax(0,1fr)_22rem] md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {item.organization}
                      </p>
                    </div>

                    <p className="text-sm text-muted md:whitespace-nowrap md:text-right">
                      {item.period}
                    </p>
                  </header>

                  <p className="text-base leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </ContentCard>
        </div>
      </PortfolioShell>
    </Container>
  );
}
