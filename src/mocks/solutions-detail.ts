import { processSteps, solutionsDetails } from "./solutions";

export const solutionSlugs: Record<string, number> = {
  "interactive-touch-interface": 1,
  "unified-communications": 2,
  "managed-services": 3,
  "video-wall": 4,
  "digital-signage": 5,
  "intelligent-lighting-control": 6,
  "chope-ai-room-booking": 7,
  "av-automation": 8,
  "command-centre": 9,
};

export interface SolutionDetail {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  overviewImagePrompt: string;
  overviewImageUrl: string;
  features: { icon: string; title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  benefits: { icon: string; title: string; description: string }[];
  industries: string[];
  ctaText: string;
}

const slugsById = Object.fromEntries(
  Object.entries(solutionSlugs).map(([slug, id]) => [id, slug]),
) as Record<number, string>;

const featureIcons = [
  "ri-sparkling-line",
  "ri-cpu-line",
  "ri-dashboard-line",
  "ri-shield-check-line",
  "ri-line-chart-line",
  "ri-customer-service-line",
];

const benefitTemplates = [
  { icon: "ri-flashlight-line", title: "Faster Adoption", description: "Interfaces and workflows are designed so teams can use the system confidently from day one." },
  { icon: "ri-line-chart-line", title: "Measurable Impact", description: "Analytics and service reporting help teams understand utilization, uptime, and business value." },
  { icon: "ri-shield-star-line", title: "Reliable Delivery", description: "Enterprise-grade design, commissioning, and support reduce operational risk across critical spaces." },
  { icon: "ri-stack-line", title: "Future Ready", description: "Modular architecture makes it easier to expand, integrate, and upgrade as requirements evolve." },
];

export const solutionsDetailData: SolutionDetail[] = solutionsDetails.map((solution) => ({
  id: solution.id,
  slug: slugsById[solution.id] || solution.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title: solution.title,
  tagline: solution.shortDesc,
  heroDescription: solution.description,
  overview: solution.description,
  overviewImagePrompt: solution.title,
  overviewImageUrl: solution.image,
  features: solution.features.map((feature, index) => ({
    icon: featureIcons[index % featureIcons.length],
    title: feature,
    description: `${feature} is configured around your space, users, and operating requirements.`,
  })),
  howItWorks: processSteps,
  benefits: benefitTemplates,
  industries: solution.industries,
  ctaText: `Ready to explore ${solution.title.toLowerCase()} for your organization?`,
}));

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionsDetailData.find((s) => s.slug === slug);
}

export function getRelatedSolutions(currentId: number, count: number = 3): SolutionDetail[] {
  return solutionsDetailData.filter((s) => s.id !== currentId).slice(0, count);
}
