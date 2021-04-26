import axios from "axios";
import { CardData, paginatedProjects, projectFilters } from "../interfaces";

declare namespace github {
	export interface response {
		commits: number;
	}
}

export const fetchGithubCommits = async (): Promise<number | null> => {
	return await axios
		.get<github.response>("https://ceefend.herokuapp.com/api/github")
		.then((res) => res.data.commits)
		.catch((err) => {
			console.error(err);
			return null;
		});
};

export const fetchProjectStats = async (): Promise<number | null> => {
	return await axios
		.get("https://ceefend.herokuapp.com/api/project/stat")
		.then((res) => res.data.projectTotal)
		.catch((err) => {
			console.error(err);
			return null;
		});
};

export const fetchProjects = async (): Promise<CardData | null> => {
	return await axios
		.get("https://ceefend.herokuapp.com/api/project/items")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return null;
		});
};

export const fetchPaginatedProjects = async (
	page: number
): Promise<paginatedProjects.RootObject | null> => {
	return await axios
		.get<paginatedProjects.RootObject>(
			`https://ceefend.herokuapp.com/api/project/items`,
			{ params: { page: page } }
		)
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return null;
		});
};

// This is a really gigantic json
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchLastCommitForRepo = async (repo: string) => {
	return await axios
		.get("https://ceefend.herokuapp.com/api/github" + repo)
		.then((res) => res.data.commit)
		.catch((err) => {
			console.error(err);
			return null;
		});
};

export const fetchFilters = async (): Promise<projectFilters.RootObject | null> => {
	return await axios
		.get("https://ceefend.herokuapp.com/api/project/filter")
		.then((res) => res.data)
		.catch((err) => {
			console.error(err);
			return null;
		});
};
