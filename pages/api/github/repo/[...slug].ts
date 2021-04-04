import nc from "next-connect";
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
    const {slug} = req.query;
    const action = slug[0];
    console.log(slug)
    switch(action) {
        case "setup": {
            res.status(200).send({commits: ""})
            break;
        }
        default: 
            res.status(403).send({error: "Need an action"})
            break;
    }
})

export default handler;