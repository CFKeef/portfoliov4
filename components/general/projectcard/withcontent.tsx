import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { commitResponse, Fields } from "../../../interfaces";
import TechIcon from "./TechIcon";
import GithubLogo from "../../../public/images/github-logo.svg";

const ProjectContainer = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	border: 2px solid var(--purple);
	border-radius: var(--border-radius);

	@media (min-width: 30em) {
		flex: 0 0 45%;
		height: 33rem;
	}
`;

const PositionContainer = styled.div`
	display: flex;
	justify-content: space-between;
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
	margin: 0.5rem 0 0 0;

	h4 {
		font-size: 1.6rem;
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
	font-size: 1.1rem;
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
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	width: 100%;
	overflow: hidden;
	margin: 0.5rem 0 0 0;
	padding: 0;
	list-style-type: none;

	li {
		margin: 0 1rem 0 0;
	}
`;

const CommitBlock = styled.div`
	width: 100%;
	border-radius: var(--border-radius);
	background-color: rgba(219, 59, 147, 0.5);
	display: flex;
	justify-content: center;
	align-items: flex-start;

	p {
		margin: 0.5rem;
		color: white;
		opacity: 0.8;
	}
`;

const GithubSection = styled(Section)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	margin-top: 0.5rem;
	img {
		height: 1.5rem;
		width: auto;
	}

	a {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		width: 70%;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;

	a {
		text-decoration: none;
		color: var(--buttonText);
		font-weight: 600;
		margin-left: 0.5rem;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const TimeText = styled.span`
	color: #fff;
	opacity: 0.4;
	text-align: right;
	width: 100%;
	font-size: 14px;
`;

const ImageContainer = styled.div`
	img {
		border-radius: calc(var(--border-radius) / 2);
	}
`;

interface ProjectProps {
	data: Fields;
	commit: commitResponse.Commit;
}

const Project: React.FunctionComponent<ProjectProps> = ({
	data,
	commit,
}): JSX.Element => {
	const generateTechTabs = () => {
		return (
			<TabGroup>
				<TechIcon techName={"Typescript"} />
				<TechIcon techName={"React"} />
				<TechIcon techName={"NextJS"} />
				<TechIcon techName={"Postgres"} />
			</TabGroup>
		);
	};

	return (
		<ProjectContainer>
			<PositionContainer>
				<ImageContainer>
					<img
						draggable={false}
						src={
							"https://cdn.discordapp.com/attachments/140312652873203713/834066172616900638/CoursorBanner.svg"
						}
						alt="Coursor Banner Picture"
					/>
				</ImageContainer>
				<TitleBar>
					<h4>Coursor</h4>
					<Link href={"/"} passHref={true}>
						<Anchor draggable={false} href={"/"}>
							Visit
						</Anchor>
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
					<TabGroup>{generateTechTabs()}</TabGroup>
				</Section>
				<Section
					style={{
						borderTop: "2px solid var(--purple)",
						marginTop: "1rem",
					}}
				>
					<SectionTitle style={{ marginTop: ".5rem" }}>
						Last Commit
					</SectionTitle>
					<CommitBlock>
						<p>
							Course management dashboard for students and
							professors
						</p>
					</CommitBlock>
				</Section>
				<GithubSection>
					<Container style={{ width: "60%" }}>
						<img draggable={false} src={GithubLogo} />
						<Link href="/">
							<a draggable={false}>CFKeef/Coursor</a>
						</Link>
					</Container>
					<Container style={{ width: "40%" }}>
						<TimeText>Last updated 3d ago</TimeText>
					</Container>
				</GithubSection>
			</PositionContainer>
		</ProjectContainer>
	);
};

export default Project;
