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
            <SectionHeading>Professional Profile</SectionHeading>

            <div className="mt-6 space-y-4">
              {professionalSummary.map((paragraph) => (
                <p
                  key={paragraph}
                  className="type-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ContentCard>

          <ContentCard>
            <SectionHeading>Technical Skills</SectionHeading>

            <div className="mt-8 grid gap-9 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="type-subsection-title">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-lg
                          border
                          px-3 py-1.5
                          text-sm
                          font-semibold
                        "
                        style={{
                          backgroundColor: "#eef4f9",
                          borderColor: "#c8d8e5",
                          color: "#405b73",
                        }}
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
                      <h3 className="type-subsection-title">
                        {item.role}
                      </h3>

                      <p className="type-supporting mt-1 font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <div className="type-supporting md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <ul className="type-body list-disc space-y-3 pl-6">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 border-t border-border-subtle pt-8">
              <h3 className="type-subsection-title">
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
                        <h4 className="type-subsection-title">
                          {item.role}
                        </h4>

                        <p className="type-supporting mt-1 font-medium">
                          {item.organization}
                        </p>
                      </div>

                      <div className="type-supporting md:whitespace-nowrap md:text-right">
                        <p>{item.period}</p>
                        <p className="mt-1">{item.location}</p>
                      </div>
                    </header>

                    <ul className="type-body list-disc pl-6">
                      <li>{item.summary}</li>
                    </ul>
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
                      <h3 className="type-subsection-title">
                        {item.degree}
                      </h3>

                      <p className="type-supporting mt-1 font-medium">
                        {item.institution}
                      </p>
                    </div>

                    <div className="type-supporting md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <p className="type-body">
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
                      className="type-body-link transition-opacity hover:opacity-65"
                    >
                      {publication.title} ↗
                    </a>

                    <p className="type-supporting mt-1">
                      {publication.journal}
                    </p>
                  </div>

                  <p className="type-supporting shrink-0 sm:text-right">
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
                      <h3 className="type-subsection-title">
                        {item.role}
                      </h3>

                      <p className="type-supporting mt-1 font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <p className="type-supporting md:whitespace-nowrap md:text-right">
                      {item.period}
                    </p>
                  </header>

                  <p className="type-body">
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
