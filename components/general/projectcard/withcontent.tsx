import React from "react";
import { Commit, Fields } from "../../../interfaces";
import TechIcon from "./TechIcon";
import GithubLogo from "../../../public/images/github-logo.svg";
import {
	Anchor,
	openLinkInNewTab,
	TabGroup,
	ProjectContainer,
	PositionContainer,
	ImageContainer,
	TitleBar,
	Section,
	SectionTitle,
	SectionBody,
	CommitBlock,
	GithubSection,
	Container,
	GitAnchor,
	TimeText,
} from "./components";

interface ProjectProps {
	data: Fields;
	commit: Commit;
}

const Project: React.FunctionComponent<ProjectProps> = ({
	data,
	commit,
}): JSX.Element => {
	const handleLinkGen = () => {
		if (data.deployedLink) {
			return (
				<Anchor
					draggable={false}
					onClick={() => openLinkInNewTab(data.deployedLink)}
				>
					Visit
				</Anchor>
			);
		}
	};

	const generateTechTabs = () => {
		return (
			<TabGroup>
				{data.tech.map((tech) => (
					<TechIcon techName={tech} key={data.title + tech} />
				))}
			</TabGroup>
		);
	};

	return (
		<ProjectContainer>
			<PositionContainer>
				<ImageContainer>
					<img
						draggable={false}
						src={data.imageLink}
						alt={data.title + " Project Image"}
					/>
				</ImageContainer>
				<TitleBar>
					<h2>{data.title}</h2>
					{handleLinkGen()}
				</TitleBar>
				<Section>
					<SectionTitle>What It Is</SectionTitle>
					<SectionBody>{data.description}</SectionBody>
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
						<p>{commit.message}</p>
					</CommitBlock>
				</Section>
				<GithubSection>
					<Container style={{ width: "60%" }}>
						<img draggable={false} src={GithubLogo} />
						<GitAnchor
							draggable={false}
							onClick={() => openLinkInNewTab(data.repoLink)}
						>
							{"CFKeef/" + data.repoName}
						</GitAnchor>
					</Container>
					<Container style={{ width: "40%" }}>
						<TimeText>
							Updated{" "}
							{new Date(commit.commitPosted).toLocaleDateString()}
						</TimeText>
					</Container>
				</GithubSection>
			</PositionContainer>
		</ProjectContainer>
	);
};

export default Project;
