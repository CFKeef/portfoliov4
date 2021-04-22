export type Proj = {
	title: string;
	desc: string;
	tech: string[];
	gitLink: string;
	deployedLink: string;
	current: boolean;
};

export interface GitHubContributor {
	contributions: number;
}

export interface GitHubRepo {
	name: string;
}

export interface Item {
	metadata: Metadata;
	sys: Sys;
	fields: Fields;
}

export interface Fields {
	title: string;
	description: string;
	tech: string[];
	repoName: string;
	repoLink: string;
	deployedLink: string;
	imageLink: string;
}
interface Sys {
	space: Space;
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	environment: Space;
	revision: number;
	contentType: Space;
	locale: string;
}

interface Space {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sys: any[];
}

interface Metadata {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	tags: any[];
}

export interface Commit {
	project: string;
	message: string;
	commitPosted: Date;
}
export interface CardData {
	projects: Fields[];
	commits: Commit[];
}

export namespace paginatedProjects {
	export interface RootObject {
		projects: Projects;
		commits: Commits;
	}

	interface Commits {
		previousPage?: number | null;
		nextPage: number;
		total: number;
		totalPages: number;
		items: Commit[];
	}

	interface Projects {
		previousPage?: number | null;
		nextPage: number;
		total: number;
		totalPages: number;
		items: Fields[];
	}
}
