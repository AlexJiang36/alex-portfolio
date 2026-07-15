export type Project = {
  slug: string;
  title: string;
  status: string;
  shortDescription: string;
  technologies: readonly string[];
  highlights: readonly string[];
  caseStudyPath?: string;
  image?: {
    src: string;
    alt: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};