import React, { useState } from "react";
import ProjectSelect from "./select";
import styled from "styled-components";
import { SectionSplitterText } from "../general/text";
import { useQuery } from "react-query";

import Card from "./card";

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
	return (
		<Container>
			<ListBar>
				<ProjectSelect data={options} />
			</ListBar>
			<SectionSplitterText>Results</SectionSplitterText>
			<ListContainer>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</ListContainer>
		</Container>
	);
};

export default ProjectList;
