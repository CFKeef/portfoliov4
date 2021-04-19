import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Fields } from "../../../interfaces";
import { ParagraphText } from "../text";

const ProjectContainer = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex: 0 0 30%;

	border: 2px solid var(--purple);
	border-radius: var(--border-radius);
	height: 30rem;
`;

const PositionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	margin: 20px;
	width: calc(100% - 40px);
	height: calc(100% - 40px);
`;

const TitleBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;

	h4 {
		font-size: 1.8rem;
		text-align: left;
		display: inline;
		color: white;
		width: 75%;
	}
`;

const Anchor = styled.a`
	text-decoration: none;
	height: 2rem;
	width: 20%;
	background-color: var(--bg);
	border: 2px solid rgba(255, 255, 255, 0.4);
	font-weight: normal;
	border-radius: calc(var(--border-radius) / 2);
	transition: background-color 0.15s ease;
	color: rgba(255, 255, 255, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		border: 2px solid var(--purple);
		color: var(--purple);
		cursor: pointer;
	}
	&:active {
		opacity: 0.9;
	}
`;

const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	margin: 10px 0 0 0;
`;

const SectionTitle = styled.p`
	width: 100%;
	text-align: left;
	color: white;
	font-weight: 600;
	font-size: 1rem;
	margin: 0 0 5px 0;
`;

const SectionBody = styled.p`
	width: 100%;
	text-align: left;
	color: white;
	font-weight: normal;
	font-size: 1rem;
	margin: 0;
	opacity: 0.8;
`;

const TabGroup = styled.ul`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: row;
	width: 100%;
	overflow: hidden;
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

interface ProjectProps {
	data: Fields;
}

const Project: React.FunctionComponent<ProjectProps> = ({
	data,
}): JSX.Element => {
	return (
		<ProjectContainer>
			<PositionContainer>
				<TitleBar>
					<h4>Coursor</h4>
					<Link href={"/"} passHref={true}>
						<Anchor href={"/"}>Visit</Anchor>
					</Link>
				</TitleBar>
				<Section>
					<SectionTitle>What It Is</SectionTitle>
					<SectionBody>
						Course management dashboard for students and professors
					</SectionBody>
				</Section>
				<Section>
					<SectionTitle>What I Used</SectionTitle>
					<TabGroup></TabGroup>
				</Section>
				<ParagraphText>sdaasdasdasd</ParagraphText>
			</PositionContainer>
		</ProjectContainer>
	);
};

export default Project;
