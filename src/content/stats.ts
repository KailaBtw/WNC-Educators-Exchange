export const stats = {
  respondents: { value: "54", label: "Educator respondents" },
  aiActive: { value: "85%", label: "AI-active faculty already using tools" },
  policyBehind: { value: "65%", label: "Say institutional policy is behind or nonexistent" },
  criticalThinking: { value: "92%", label: "Rank loss of critical thinking as top concern" },
  redesigned: { value: "60%", label: "Have redesigned assignments toward process" },
  literacyConsensus: { value: "75%", label: "Believe AI literacy should be a core competency" },
  privateTools: { value: "25%", label: "Institutions with a private/secure AI tool" },
  aboutTeaser: [
    { value: "54", label: "Survey respondents", color: "green-light" as const },
    { value: "92%", label: "Critical thinking concern", color: "purple" as const },
    { value: "10", label: "Regional issues framed", color: "blue" as const },
  ],
} as const;
