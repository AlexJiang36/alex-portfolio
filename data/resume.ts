export const professionalSummary = [
  "Software developer and UBC Bachelor of Computer Science student with nearly five years of experience building data pipelines, analytical workflows, statistical models, dashboards, and decision-support tools.",
  "I combine software engineering with a background in data science, statistics, and applied research, with a focus on backend systems, data-intensive applications, and machine-learning products.",
] as const;

export const experience = [
  {
    role: "Statistical Analyst",
    organization:
      "UBC Department of Emergency Medicine · Brubacher Laboratory",
    location: "Vancouver, BC",
    period: "Nov 2020 – Mar 2025",
    highlights: [
      "Built Python data pipelines and automated workflows to clean, integrate, and maintain large administrative datasets covering claims, injuries, treatments, demographics, and financial outcomes.",
      "Developed statistical models in R to study functional recovery and healthcare utilization, including survival analysis and generalized linear mixed models.",
      "Built interactive Python and Power BI dashboards for road-trauma monitoring and injury-prevention decision support.",
      "Collaborated with data engineering, operations, research, and client teams to define analytical requirements and communicate findings to senior stakeholders.",
    ],
  },
  {
    role: "Operational Data Analyst",
    organization: "Jun Kang Life Insurance Co., Ltd.",
    location: "Nanjing, China",
    period: "Dec 2018 – Jul 2019",
    highlights: [
      "Analyzed operational KPIs including claim cost, settlement time, and policy withdrawal rates, and presented weekly findings to operations leadership.",
      "Used SQL and advanced Excel to deliver ad-hoc performance analysis for executives and operational teams.",
    ],
  },
] as const;

export const earlierExperience = [
  {
    role: "Investment Associate",
    organization: "New City Capital, LLC",
    location: "Campbell · San Francisco Bay Area, CA, USA",
    period: "Jul 2016 – Apr 2018",
    summary:
      "Built financial models and scenario analyses for seven real-estate investments valued from US$25 million to US$675 million.",
  },
] as const;

export const detailedEducation = [
  {
    degree: "Bachelor of Computer Science (Second Degree)",
    institution: "University of British Columbia",
    location: "Vancouver, BC",
    period: "Sep 2025 – Present",
    details:
      "Coursework and projects focused on software engineering, algorithms, computer systems, databases, and machine learning.",
  },
  {
    degree: "Master of Data Science",
    institution: "University of British Columbia",
    location: "Vancouver, BC",
    period: "Sep 2019 – Nov 2020",
    details:
      "Graduate training in machine learning, statistical regression, databases, data engineering, and data visualization.",
  },
  {
    degree: "Master of Science in Economics",
    institution: "University of Wisconsin–Madison",
    location: "Madison, WI",
    period: "Sep 2014 – May 2016",
    details:
      "Graduate study in quantitative economics, statistical analysis, mathematical modelling, and applied research.",
  },
  {
    degree: "Master of Arts in International Studies",
    institution:
      "Johns Hopkins University–Nanjing University Center for Chinese and American Studies",
    location: "Nanjing, China",
    period: "Sep 2012 – Jun 2014",
    details:
      "Interdisciplinary graduate study in international affairs and Chinese–American studies.",
  },
  {
    degree: "Bachelor of Arts in English",
    institution: "Nanjing University",
    location: "Nanjing, China",
    period: "Sep 2008 – Jun 2012",
    details:
      "Undergraduate study in English language, literature, communication, and cross-cultural analysis.",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "Java", "C++", "SQL", "R"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "SQLAlchemy", "Alembic", "Spring Boot"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Database Design", "Data Modelling"],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "pandas",
      "scikit-learn",
      "Statistical Modelling",
      "Model Evaluation",
      "Experiment Design",
      "Time Series",
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Plotly"],
  },
  {
    title: "Developer Tools",
    skills: [
      "Docker",
      "Git",
      "Linux",
      "Azure Data Factory",
      "Databricks",
    ],
  },
] as const;

export const selectedPublications = [
  {
    title:
      "Did implementation of no-fault auto-insurance in British Columbia, Canada, impact return to work following road trauma?",
    journal: "BMJ Open",
    year: "2023",
    href: "https://doi.org/10.1136/bmjopen-2023-075858",
  },
  {
    title:
      "Association of air quality during forest fire season with respiratory emergency department visits in Vancouver, British Columbia",
    journal: "Journal of Climate Change and Health",
    year: "2023",
    href: "https://doi.org/10.1016/j.joclim.2023.100255",
  },
  {
    title:
      "Correlation between oral fluid and blood THC concentration: a systematic review and discussion of policy implications",
    journal: "Accident Analysis & Prevention",
    year: "2022",
    href: "https://doi.org/10.1016/j.aap.2022.106694",
  },
] as const;

export const leadership = [
  {
    role: "Mentor",
    organization: "UBC Master of Data Science Program",
    period: "Oct 2021 – Jun 2023",
    description:
      "Mentored students transitioning from non-technical backgrounds into data science, providing academic guidance, resume feedback, project support, and interview preparation.",
  },
] as const;
