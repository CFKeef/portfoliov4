import React from "react";
import {
	CommitBlock,
	PositionContainer,
	ProjectContainer,
	Section,
	Skeleton,
	TitleBar,
	GithubSection,
} from "./components";

const LoadingCard = () => {
	return (
		<ProjectContainer>
			<PositionContainer>
				<Skeleton style={{ height: "8rem" }} />
				<TitleBar>
					<Skeleton style={{ height: "2rem" }} />
				</TitleBar>
				<Section>
					<Skeleton style={{ height: "2rem" }} />

					<Skeleton style={{ height: "3rem" }} />
				</Section>
				<Section>
					<Skeleton style={{ height: "2rem" }} />
					<Skeleton style={{ height: "3rem" }} />
				</Section>
				<Section
					style={{
						borderTop: "2px solid var(--purple)",
						marginTop: "1rem",
					}}
				>
					<Skeleton style={{ height: "2rem", marginTop: "1rem" }} />

					<CommitBlock>
						<Skeleton />
					</CommitBlock>
				</Section>
				<GithubSection>
					<Skeleton style={{ height: "2rem" }} />
				</GithubSection>
			</PositionContainer>
		</ProjectContainer>
	);
};

export default LoadingCard;
