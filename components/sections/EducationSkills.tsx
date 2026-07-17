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

          <div className="mt-6 space-y-7">
            {education.map((item) => (
              <article key={`${item.institution}-${item.degree}`}>
                <p className="text-lg font-semibold leading-7">
                  {item.degree}
                </p>

                <p className="mt-2 text-base leading-7 text-muted">
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
