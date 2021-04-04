import nc from "next-connect";
import { getContributionsPastYear } from "../../../../utils/githubAPI";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
    const {slug} = req.query;
    const action = slug[0];

    switch(action) {
        case "setup": {
            const commits = await getContributionsPastYear();
            res.status(200).send({commits: commits});
            break;
        }
        default: 
            res.status(403).send({error: "Need an action"});
            break;
    }
})

export default handler;