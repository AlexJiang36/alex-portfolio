import ContentCard from "@/components/ui/ContentCard";
import ProjectTag from "@/components/ui/ProjectTag";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, topSkills } from "@/data/background";

export default function EducationSkills() {
  return (
    <ContentCard>
      <SectionHeading>Education & Skills</SectionHeading>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">
            Education
          </h3>

          <div className="mt-5 space-y-6">
            {education.map((item) => (
              <article key={`${item.institution}-${item.degree}`}>
                <p className="font-medium">
                  {item.degree}
                </p>

                <p className="mt-1 text-sm leading-6 text-muted">
                  {item.institution} · {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Top Skills
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {topSkills.map((skill) => (
              <ProjectTag key={skill}>
                {skill}
              </ProjectTag>
            ))}
          </div>
        </div>
      </div>
    </ContentCard>
  );
}