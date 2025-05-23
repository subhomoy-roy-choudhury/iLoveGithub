import { Tool } from "./lib/types";

export const RECENT_REPO_LOCAL_STORAGE_KEY = "recent_github_repos";

export const RECENT_TRENDING_REPO_UI_MAXCOUNT = 4;

export const RECENT_TRENDING_REPO_CACHE_MAXCOUNT = 4;

export const DONATION_MERCHANT_NAME = "iLoveGithub";

export const BUY_ME_COFFEE_URL = "https://buymeacoffee.com/crackedngineer";

export const SUBSTACK_NEWSLETTER_URL = "https://ilovegithub.substack.com/";

export const GITHUB_REPO_URL = "https://github.com/crackedngineer/iLoveGithub";

export const GITHUB_SUBMIT_TOOL_URL =
  "https://github.com/crackedngineer/iLoveGithub/issues/new?template=new-tool-request.yml";

export const DEMO_VIDEO_URL = "https://www.youtube.com/embed/eg5eAEnNEVY?si=_me67cuBbIloxm8o&autoplay=1"

export const DefaultGithubRepo = {
  owner: "crackedngineer",
  repo: "iLoveGithub",
};

export const ToolCategories = {
  DEVELOPMENT: "Development Tools",
  ANALYTICS: "Analytics & Insights",
  WIDGETS: "Widgets & UI",
  DOCUMENTATION: "Documentation & AI-Powered Understanding",
  VISUALIZATION: "Code Visualization & Diagrams",
} as const;
