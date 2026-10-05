import { site } from "./site";
import { routes } from "../config/site";

export type ResourceItem = {
  label: string;
  blurb: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type ResourceGroup = {
  id: string;
  title: string;
  eyebrow: string;
  lede: string;
  accent: "purple" | "blue" | "green";
  items: ResourceItem[];
};

export const resourcesIntro = {
  eyebrow: "Tools & guidance",
  title: "Resources",
  description:
    "A short list of places educators already use for course materials, captions, and AI literacy. Check what your campus has licensed before relying on any one tool.",
};

/** Featured band under the hero — primary next step for most visitors. */
export const resourcesFeatured = {
  eyebrow: "Next gathering",
  title: "November 13 Educators’ Exchange",
  when: "Friday, November 13, 2026 · Mars Hill University",
  blurb:
    "Full day schedule, contest slot, and campus share-outs. Register through Novera, then skim the program.",
  primary: { href: site.registerUrl, label: "Register for Nov 13", external: true },
  secondary: { href: routes.november, label: "View the program →" },
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "tools",
    title: "Classroom tools",
    eyebrow: "Materials first",
    lede: "Tools that work from sources you provide—or from structured faculty PD—rather than open-ended chat.",
    accent: "purple",
    items: [
      {
        label: "Google NotebookLM",
        href: "https://notebooklm.google",
        blurb:
          "Upload readings or notes and ask questions grounded in those files. Useful for study guides; still verify citations yourself.",
        external: true,
      },
      {
        label: "NotebookLM for Education",
        href: "https://edu.google.com/intl/ALL_us/ai-gemini-notebook/",
        blurb:
          "Google’s education overview for NotebookLM / Gemini Notebook, including Workspace for Education access paths.",
        external: true,
      },
      {
        label: "ACAWEB AI professional development",
        href: site.acawebCourseUrl,
        blurb: "Regional AI-PD courses for educators (ACAWEB).",
        external: true,
      },
    ],
  },
  {
    id: "access",
    title: "Captions & transcripts",
    eyebrow: "Access",
    lede: "For class recordings and live sessions—helps teachers review, and helps students who are Deaf, hard of hearing, or need text to process speech.",
    accent: "blue",
    items: [
      {
        label: "Otter.ai for Education",
        href: "https://otter.ai/education",
        blurb:
          "Live captions and searchable notes for lectures or meetings. Confirm privacy and recording rules with your campus before use.",
        external: true,
      },
      {
        label: "Google Live Transcribe",
        href: "https://support.google.com/accessibility/android/answer/9158064",
        blurb:
          "Free Android live captions from the device mic. Simple for in-person classes; accuracy depends on clear audio.",
        external: true,
      },
      {
        label: "Windows Live Captions",
        href: "https://support.microsoft.com/windows/use-live-captions-to-better-understand-audio-dd387379-ef91-83c4-e53c-9c8fb16f24db",
        blurb:
          "Built-in Windows captions for system audio. No extra account; still not a substitute for formal CART when required.",
        external: true,
      },
    ],
  },
  {
    id: "frameworks",
    title: "Literacy & guidance",
    eyebrow: "Frameworks",
    lede: "Public frameworks for teaching with and about AI—useful when drafting syllabus language or campus guidance.",
    accent: "green",
    items: [
      {
        label: "UNESCO AI competency framework for teachers",
        href: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
        blurb: "Competencies and progression levels for educators using AI in teaching.",
        external: true,
      },
      {
        label: "UNESCO AI competency framework for students",
        href: "https://www.unesco.org/en/articles/ai-competency-framework-students",
        blurb: "Student-facing competencies for ethical and practical AI literacy.",
        external: true,
      },
      {
        label: "TeachAI guidance toolkit",
        href: "https://www.teachai.org/toolkit",
        blurb: "Policy and guidance templates for schools building responsible-use practices.",
        external: true,
      },
    ],
  },
];
