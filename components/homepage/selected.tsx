import React from "react";
import styled from "styled-components";
import Project from "../general/project";
import {
	SingleColumnContentContainer,
	List,
} from "../general/containers/index";
import { SectionSplitterText } from "../general/text";

interface Props {
	projects: [];
}
const ProjectList = styled(List)`
	flex-direction: row;
	flex-wrap: wrap;
`;

const LiWrapper = styled.li`
	margin: 1rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const Selected: React.FunctionComponent<Props> = ({ projects }) => {
	const generateProjects = () => {
		return (
			<ProjectList>
				{projects.map(
					(element: {
						fields: {
							title: string;
							desc: string;
							tech: string[];
							deployedLink: string | undefined;
							gitLink: string | undefined;
						};
					}) => {
						return (
							<LiWrapper key={element.fields.title}>
								<Project
									name={element.fields.title}
									desc={element.fields.desc}
									tech={element.fields.tech}
									deployedLink={element.fields.deployedLink}
									repoLink={element.fields.gitLink}
									showLastCommit={false}
								/>
							</LiWrapper>
						);
					}
				)}
			</ProjectList>
		);
	};

	return (
		<SingleColumnContentContainer>
			<SectionSplitterText>Selected Projects</SectionSplitterText>
			{generateProjects()}
		</SingleColumnContentContainer>
	);
};

export default Selected;
