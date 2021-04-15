/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../general/input";
import { HeaderText, ParagraphText } from "../general/text";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import { Anchor } from "../general/general";

const CallToAction = styled.section`
	background-color: var(--fg);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	border-radius: var(--border-radius);

	@media (min-width: 30em) {
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	@media (max-width: 30em) {
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const SmallerHeader = styled(HeaderText)`
	margin-top: 1.5rem;
	font-size: 1.3rem;
`;

const CenteredText = styled(ParagraphText)`
	text-align: center;
	margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;

	button {
		width: 100%;
	}

	@media (min-width: 30em) {
		width: 50%;
	}
	@media (max-width: 30em) {
		width: 100%;
	}
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	margin: 1rem 0;
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
		justify-content: space-around;
	}
	@media (max-width: 30em) {
		width: 50%;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: 30em) {
		width: 50%;
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
		width: 50%;
		flex-direction: column;

		p {
			width: 10%;
		}
	}
	@media (max-width: 30em) {
		width: 100%;
		flex-direction: column;
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
				<ButtonContainer>
					<Button>
						<Link href={"/contact"} passHref={true}>
							<Anchor href={"/contact"}>Contact</Anchor>
						</Link>
					</Button>
				</ButtonContainer>
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
