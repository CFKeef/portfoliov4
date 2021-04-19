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
	desc: string;
	tech: string[];
	gitLink: string;
	deployedLink: string;
	current: boolean;
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
