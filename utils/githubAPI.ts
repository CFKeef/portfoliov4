import axios from "axios";
import { GitHubContributor, GitHubRepo } from "../interfaces";

const config = {
    headers: {
        "Authorization":process.env.GITHUB_OAUTH
    }
}

const getAllRepos = async () => {
    // Public info so we can just dump it in here
    const {data} = await axios.get("https://api.github.com/users/CFKeef/repos", config);

    if(data) {
        const projects: string[] = [];

        data.map((project:GitHubRepo) => {
            projects.push(project.name);
        })

        return projects;
    } else return null;
}

const getSpecifiedRepoCommits = async (repoName: string) => {
    const {data} = await axios.get(`https://api.github.com/repos/CFKeef/${repoName}/contributors`, config);

    if(data) {
        const user:GitHubContributor = data[0];
        return user.contributions;
    }
    
    else return 0;
};

export const getContributionsPastYear = async ():Promise<number> => {
    const projects = await getAllRepos();
    let sum = 0;

    if(projects) {
        for await (const commits of projects?.map( async (project) => {return await getSpecifiedRepoCommits(project)})) {
            sum += commits;
        }
    }

    return sum;
};