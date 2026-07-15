export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  status: string;
  summary: string;
  technologies: readonly string[];
  sourceNote: string;
  sections: readonly CaseStudySection[];
};