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
			<SectionSplitterText style={{ marginTop: "1.5rem" }}>
				Background
			</SectionSplitterText>
			<HeaderText>Here's what I've done!</HeaderText>
			<ParagraphText>
				Current tech stack consists of Typescript, NextJS and React for
				Front end. On the backend I've used Express and Fastify before
				and at my work I work with a barebones Java servlet.
			</ParagraphText>
			<ParagraphText>
				In my free time I really do enjoy sampling tech and my FrontEnd
				Masters subscription makes it really easy to do so. So I've
				already been exposed to a ton of things and find it easy to
				adapt to needs or expectations of the role.
			</ParagraphText>
			<SectionSplitterText>List Controls</SectionSplitterText>
			<ProjectList />
		</Layout>
	);
};

export default Projects;
