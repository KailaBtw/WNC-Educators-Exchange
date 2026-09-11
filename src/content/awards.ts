export type Awardee = {
  id: string;
  name: string;
  institution: string;
  recognition: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const awardsIntro = {
  eyebrow: "Recognition",
  title: "Faculty we recognize",
  description:
    "Educators across Western North Carolina who are shaping responsible AI practice—in classrooms, policy, and regional collaboration. Profiles below are a start; the shared Drive archive holds photos, citations, and full materials.",
};

export const awardees: Awardee[] = [
  {
    id: "tanya-wces",
    name: "Tanya",
    institution: "WCES / Blue Ridge CC",
    recognition: "Summit spotlight · Place & learning",
    year: "2026",
    summary:
      "Named the tension between fast marketplace knowledge and slow educational wisdom—and why co-location and community still matter when AI makes convenience feel inevitable.",
    image: "/images/awards/tanya.svg",
    imageAlt: "Portrait placeholder for Tanya",
  },
  {
    id: "ellie-lagrave",
    name: "Ellie LaGrave",
    institution: "UNC Asheville · Computer Science",
    recognition: "Campus practice · Three pillars",
    year: "2026",
    summary:
      "Advanced assessment, usefulness, and workplace readiness as sequential pillars: process over polished output, responsible classroom AI use, and professional tools only after foundations are solid.",
    image: "/images/awards/ellie-lagrave.svg",
    imageAlt: "Portrait placeholder for Ellie LaGrave",
  },
  {
    id: "leigha-travis",
    name: "Leigha Travis",
    institution: "Land of Sky Workforce Development Board",
    recognition: "Regional report · Top 10 Issues",
    year: "2026",
    summary:
      "Co-authored the regional Top 10 Issues report from the educator survey and summits—turning two years of classroom pressure into a shared workplan for the region.",
    image: "/images/awards/leigha-travis.svg",
    imageAlt: "Portrait placeholder for Leigha Travis",
  },
  {
    id: "abtech-policy",
    name: "ABTech AI policy faculty",
    institution: "Asheville-Buncombe Technical Community College",
    recognition: "Policy innovation · Red / Yellow / Green",
    year: "2026",
    summary:
      "Built a shared vocabulary for AI on assignments—red (no use), yellow (supervised), green (open)—simple enough for syllabi and adaptable when the tools change.",
    image: "/images/awards/abtech-faculty.svg",
    imageAlt: "Portrait placeholder for ABTech AI policy faculty",
  },
  {
    id: "acaweb-pd",
    name: "ACAWEB course facilitators",
    institution: "ACAWEB",
    recognition: "Faculty development · Five E course",
    year: "2026",
    summary:
      "Run the online AI-in-education professional development course (~1 hour per week) organized around engage, explore, explain, elaborate, and evaluate.",
    image: "/images/awards/acaweb-faculty.svg",
    imageAlt: "Portrait placeholder for ACAWEB course facilitators",
  },
  {
    id: "regional-classroom",
    name: "Regional classroom innovators",
    institution: "WNC campuses",
    recognition: "Pedagogy · Process & ethics",
    year: "2026",
    summary:
      "Opened courses with AI ethics modules, redesigned assessment toward process, and used semester-long AI-assisted projects so students see both the benefits and the shortfalls of the tools.",
    image: "/images/awards/regional-faculty.svg",
    imageAlt: "Portrait placeholder for regional classroom innovators",
  },
];
