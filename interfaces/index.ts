export type Proj = {
  title: string;
  desc: string;
  tech: string[];
  gitLink: string;
  deployedLink: string;
  current: boolean;
}

export interface GitHubContributor {
  contributions: number;
}

export interface GitHubRepo {
  name: string;
}
