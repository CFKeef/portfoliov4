import React from "react";
import Layout from "../../components/general/Layout";
import {
	SectionSplitterText,
	HeaderText,
	ParagraphText,
} from "../../components/general/text";
import ProjectList from "../../components/projects/projectlist";

const Projects: React.FunctionComponent = (): JSX.Element => {
	return (
		<Layout title="Projects | Patryck.dev">
			<SectionSplitterText>Background</SectionSplitterText>
			<HeaderText>Here's what I've done!</HeaderText>
			<ParagraphText>
				Current tech stack consists of Typescript, NextJS and React for
				Front end. On the backend I've worked with Javascript, Java and currently working to learn Golang!
			</ParagraphText>
			<SectionSplitterText>List Controls</SectionSplitterText>
			<ProjectList />
		</Layout>
	);
};

export default Projects;
