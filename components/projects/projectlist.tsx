import React from "react";
import { GetStaticProps } from "next";
import ProjectSelect from "./select";
import styled from "styled-components";
import { SectionSplitterText } from "../general/text";
import Project from "../general/projectcard/withcontent";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { fetchProjects } from "../../utils/integrations";

const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ListBar = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

const ListContainer = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 30em) {
		flex-direction: column;
	}

	@media (min-width: 30em) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

const options = [
	{ value: "react", label: "React" },
	{ value: "typescript", label: "Typescript" },
	{ value: "nextjs", label: "NextJS" },
	{ value: "sql", label: "SQL" },
	{ value: "express", label: "Express" },
	{ value: "nosql", label: "NoSQL" },
	{ value: "redux", label: "Redux" },
];

const ProjectList = (): JSX.Element => {
	const { data } = useQuery("cardData", fetchProjects);

	const generateProjectCards = () => {
		return data?.projects?.map((project, index) => {
			return <Project commit={data.commits[index]} data={project} />;
		});
	};

	return (
		<Container>
			<ListBar>
				<ProjectSelect data={options} />
			</ListBar>
			<SectionSplitterText>Results</SectionSplitterText>
			<ListContainer>{data && generateProjectCards()}</ListContainer>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery("cardData", () => fetchProjects());

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
export default ProjectList;
