import React from "react";
import styled from "styled-components";
import { List } from "./containers";
import { ParagraphText, SectionSplitterText } from "./text";
import { Button } from "./input/index";

interface ProjectProps {
	name: string;
	desc: string;
	tech: string[];
	deployedLink?: string;
	repoLink?: string;
	showLastCommit?: boolean;
	mini?: boolean;
}

const BorderedContainer = styled.section`
	border: 1px solid var(--purple);
	border-radius: var(--border-radius);

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;

	@media (min-width: 30em) {
		width: 75%;
	}
`;
const ProjectName = styled.h2`
	margin: 1rem 0;
	text-align: center;
	color: var(--text);
	width: 100%;
`;
const SplitterText = styled(SectionSplitterText)`
	color: var(--text);
	margin: 1rem 0;
`;

const TabList = styled(List)`
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin: 0 0.5rem;
	@media (min-width: 30em) {
		width: 75%;
	}
`;

const Tab = styled.li`
	flex: 0 0 30%;
	margin: 0.5rem;
	border: 1px solid var(--purple);
	color: var(--text);
	text-align: center;
	border-radius: calc(var(--border-radius) / 2);
	@media (max-width: 30em) {
		font-size: 0.9rem;
	}
	@media (min-width: 30em) {
		flex: 0 0 20%;
	}
`;

const DescText = styled(ParagraphText)`
	max-width: 90%;
	max-height: 10rem;
	overflow: hidden;
	margin: 0 0 1rem 0;
	text-align: center;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 0.5rem 20px 1rem;
	flex-direction: row;
	width: calc(100% - 40px);
	@media (min-width: 30em) {
		width: 50%;
	}
`;

const ButtonContainer = styled.div`
	margin: 0 0.5rem;
	width: calc(45% - 8px);
`;

const CommitContainer = styled.div`
	background-color: var(--fg);
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	flex-direction: column;
	margin: 0.5rem 20px;
	width: calc(100% - 40px);
	border-radius: calc(var(--border-radius) / 2);

	@media (min-width: 30em) {
		width: 75%;
		margin: 0.5rem 0;
	}
`;

const CommitText = styled(ParagraphText)`
	font-size: 1rem;
	font-weight: 600;
	text-align: left;
`;

const Project: React.FunctionComponent<ProjectProps> = ({
	name,
	desc,
	tech,
	deployedLink,
	repoLink,
	showLastCommit,
	mini,
}) => {
	const generateCommit = () => {
		return (
			<CommitContainer>
				<CommitText>Lorem Ipsum</CommitText>
				<CommitText>
					<strong>CFKeef</strong> commited 3 days ago
				</CommitText>
			</CommitContainer>
		);
	};

	const generateTabs = () => {
		return (
			<TabList>
				{tech.map((element) => {
					return <Tab key={element}>{element}</Tab>;
				})}
			</TabList>
		);
	};

	return (
		<BorderedContainer>
			<ProjectName>{name}</ProjectName>
			<DescText>{desc}</DescText>
			{showLastCommit && <SplitterText>Most Recent Commit</SplitterText>}
			{showLastCommit && generateCommit()}
			<SplitterText>Tech</SplitterText>
			{generateTabs()}
			<SplitterText>Links</SplitterText>
			<ButtonRow>
				{deployedLink && (
					<ButtonContainer>
						<Button>Visit </Button>
					</ButtonContainer>
				)}
				{repoLink && (
					<ButtonContainer>
						<Button>View Repo</Button>
					</ButtonContainer>
				)}
			</ButtonRow>
		</BorderedContainer>
	);
};

export default Project;