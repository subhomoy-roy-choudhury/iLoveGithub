import { Tool } from "./lib/types";

export const DefaultGithubRepo = {
  owner: "subhomoy-roy-choudhury",
  repo: "iLoveGithub",
};

export const GithubToolsList: Tool[] = [
  {
    name: "github1s",
    title: "github1s",
    description: "One second to read GitHub code with VS Code.",
    homepage: "https://github1s.com",
    url: "https://github1s.com/{owner}/{repo}",
    icon: "https://github1s.com/favicon.ico",
    category: "Development Tools",
    iframe: true,
  },
  {
    name: "github-dev",
    title: "Github Dev",
    description: "Open any GitHub repo in a browser-based VS Code editor.",
    homepage: "https://github.dev",
    url: "https://github.dev/{owner}/{repo}",
    icon: "https://github.com/favicon.ico",
    category: "Development Tools",
    iframe: false,
  },
  {
    name: "gitdiagram",
    title: "GitDiagram",
    description:
      "Turn any GitHub repository into an interactive diagram for visualization.",
    homepage: "https://stackblitz.com/",
    url: "https://gitdiagram.com/{owner}/{repo}",
    icon: "https://gitdiagram.com/favicon.ico",
    category: "Analytics & Insights",
    iframe: true,
  },
  {
    name: "stackblitz",
    title: "StackBlitz",
    description:
      "Turn text into working web apps.",
    homepage: "https://gitdiagram.com/",
    url: "https://stackblitz.com/~/github.com/{owner}/{repo}",
    icon: "https://stackblitz.com/_astro/favicon.svg",
    category: "Development Tools",
    iframe: false,
  },
  {
    name: "vscode",
    title: "Visual Studio Code",
    description:
      "Edit projects using the full VS Code experience in-browser.",
    homepage: "https://code.visualstudio.com/docs/setup/vscode-web",
    url: "https://vscode.dev/github/{owner}/{repo}",
    icon: "https://code.visualstudio.com/assets/favicon.ico",
    category: "Development Tools",
    iframe: false,
  },
  {
    name: "gitingest",
    title: "Gitingest",
    description:
      "Turn any Git repository into a simple text digest of its codebase.",
    homepage: "https://gitingest.com/",
    url: "https://gitingest.com/{owner}/{repo}",
    icon: "https://gitingest.com/static/favicon.ico",
    category: "Analytics & Insights",
    iframe: true,
  },
  {
    name: "uithub",
    title: "uithub",
    description: "Easily Ask Your LLM Coding Questions.",
    homepage: "https://uithub.com/",
    url: "https://uithub.com/{owner}/{repo}",
    icon: "https://uithub.com/favicon-32x32.png",
    category: "Analytics & Insights",
    iframe: false,
  },
  {
    name: "gitpodcast",
    title: "GitPodcast",
    description:
      "Turn any GitHub repository into an engaging podcast in seconds.",
    homepage: "https://www.gitpodcast.com/",
    url: "https://www.gitpodcast.com/{owner}/{repo}",
    icon: "https://www.gitpodcast.com/favicon.ico",
    category: "Analytics & Insights",
    iframe: true,
  },
  {
    name: "socialify",
    title: "Github Socialify",
    description: "Socialify your GitHub project to share with the world.",
    homepage: "https://socialify.git.ci/",
    url: "https://socialify.git.ci/{owner}/{repo}",
    icon: "https://socialify.git.ci/favicon.ico",
    category: "Widgets & UI",
    iframe: true,
  },
  {
    name: "gitsummarize",
    title: "GitSummarize",
    description:
      "Turn any GitHub repository into a comprehensive AI-powered documentation hub.",
    homepage: "https://gitsummarize.com/",
    url: "https://gitsummarize.com/{owner}/{repo}",
    icon: "https://gitsummarize.com/favicon.ico",
    category: "Analytics & Insights",
    iframe: true,
  },
  {
    name: "explaingithub",
    title: "ExplainGithub",
    description:
      "Understand complex codebases with AI.",
    homepage: "https://explaingithub.com/",
    url: "https://explaingithub.com/{owner}/{repo}",
    icon: "https://explaingithub.com/favicon.ico",
    category: "Analytics & Insights",
    iframe: false,
  },
];
