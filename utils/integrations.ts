import axios from "axios";

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
