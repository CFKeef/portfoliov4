import React from 'react';

interface CardProps {
	name: string;
	desc: string;
	tech: string[];
	deployedLink?: string;
	repoLink?: string;
	showLastCommit?: boolean;
    imgUrl?:string;
}


const Card:React.FunctionComponent<CardProps> = ({name,desc,tech,deployedLink, repoLink, showLastCommit, imgUrl}) => {
    return (
        
    )
}