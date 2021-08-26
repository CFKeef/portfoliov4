/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { HeaderText, ParagraphText } from "../general/text";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Anchor } from "../general/general";

const CallToAction = styled.section`
	background-color: var(--fg);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: var(--border-radius);
	margin-top: 1rem;
	@media (min-width: 30em) {
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	@media (max-width: 30em) {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 20px;
	}
`;

const SmallerHeader = styled(HeaderText)`
	margin-top: 1.5rem;
	font-size: 1.3rem;
`;

const CenteredText = styled(ParagraphText)`
	text-align: center;
	margin-bottom: 1rem;
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin: 1rem 0;
	justify-content: space-around;

	svg {
		height: 2rem;
		width: auto;
		fill: var(--purple);

		path &:hover {
			background-color: var(--bg);
			cursor: pointer;
		}
		path &:active {
			opacity: 0.9;
		}
	}

	@media (min-width: 30em) {
		width: 20%;
	}

	@media (max-width: 30em) {
		width: 100%;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: 30em) {
		flex: 1 1 50%;
	}
	@media (max-width: 30em) {
		width: 100%;
	}
`;

const ActionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 30em) {
		flex: 1 1 50%;
		flex-direction: column;
		height: 100%;
		p {
			width: 10%;
		}
	}
	@media (max-width: 30em) {
		width: 100%;
		flex-direction: column;
	}
`;

const StyledAnchor = styled(Anchor)`
	@media (min-width: 30em) {
		width: 50%;
	}

	@media (max-width: 30em) {
		width: 100%;
	}
	height: 2rem;
	background-color: var(--purple);
	border: 2px solid var(--purple);
	font-weight: bold;
	border-radius: var(--border-radius);
	transition: background-color 0.15s ease;
	color: var(--buttonText);
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: var(--bg);
		cursor: pointer;
	}
	&:active {
		opacity: 0.9;
	}
`;

const CTA = () => {
	return (
		<CallToAction>
			<ContentContainer>
				<SmallerHeader>Wow you've come a long way</SmallerHeader>
				<CenteredText>
					Through this scroll I felt myself getting to know you and I
					know you already have an idea for who I am.
				</CenteredText>
				<CenteredText>
					So I think its time for one of us to break the ice.
				</CenteredText>
			</ContentContainer>
			<ActionContainer>
				<Link href={"/contact"} passHref={true}>
					<StyledAnchor href={"/contact"}>Break the Ice</StyledAnchor>
				</Link>

				<IconContainer>
					<Link href={"https://github.com/CFKeef"} passHref={true}>
						<a href={"https://github.com/CFKeef"}>
							<FaGithubSquare />
						</a>
					</Link>
					<Link
						href={"https://www.linkedin.com/in/patryckg/"}
						passHref={true}
					>
						<a href={"https://www.linkedin.com/in/patryckg/"}>
							<FaLinkedin />
						</a>
					</Link>
				</IconContainer>
			</ActionContainer>
		</CallToAction>
	);
};

export default CTA;
