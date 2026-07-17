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
                  className="text-[18px] leading-8 text-foreground/90"
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
                  <h3 className="text-xl font-semibold">
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
                      <h3 className="text-xl font-semibold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-base font-medium text-foreground/90">
                        {item.organization}
                      </p>
                    </div>

                    <div className="text-base text-foreground/90 md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <ul className="list-disc space-y-3 pl-6 text-[17px] leading-8 text-foreground/90">
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
                        <h4 className="text-xl font-semibold">
                          {item.role}
                        </h4>

                        <p className="mt-1 text-base font-medium text-foreground/90">
                          {item.organization}
                        </p>
                      </div>

                      <div className="text-base text-foreground/90 md:whitespace-nowrap md:text-right">
                        <p>{item.period}</p>
                        <p className="mt-1">{item.location}</p>
                      </div>
                    </header>

                    <ul className="list-disc pl-6 text-[17px] leading-8 text-foreground/90">
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
                      <h3 className="text-xl font-semibold">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-base font-medium text-foreground/90">
                        {item.institution}
                      </p>
                    </div>

                    <div className="text-base text-foreground/90 md:whitespace-nowrap md:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </header>

                  <p className="text-[17px] leading-8 text-foreground/90">
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
                      className="text-[17px] font-medium leading-7 text-foreground/95 transition-opacity hover:opacity-65"
                    >
                      {publication.title} ↗
                    </a>

                    <p className="mt-1 text-base text-foreground/85">
                      {publication.journal}
                    </p>
                  </div>

                  <p className="shrink-0 text-base text-foreground/85 sm:text-right">
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
                      <h3 className="text-xl font-semibold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-base font-medium text-foreground/90">
                        {item.organization}
                      </p>
                    </div>

                    <p className="text-base text-foreground/90 md:whitespace-nowrap md:text-right">
                      {item.period}
                    </p>
                  </header>

                  <p className="text-[17px] leading-8 text-foreground/90">
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
