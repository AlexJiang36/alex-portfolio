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
          <h3 className="type-subsection-title">
            Education
          </h3>

          <div className="mt-6 space-y-7">
            {education.map((item) => (
              <article key={`${item.institution}-${item.degree}`}>
                <p className="type-body-strong">
                  {item.degree}
                </p>

                <p className="type-supporting mt-2">
                  {item.institution} · {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="type-subsection-title">
            Top Skills
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
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
