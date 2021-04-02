import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../general/input";
import { HeaderText, ParagraphText } from "../general/text";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const CallToAction = styled.section`
	background-color: var(--fg);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	border-radius: var(--border-radius);

	@media (min-width: 30em) {
		width: 75%;
	}
`;

const SmallerHeader = styled(HeaderText)`
	margin-top: 1.5rem;
	font-size: 1.3rem;
`;

const CenteredText = styled(ParagraphText)`
	text-align: center;
`;

const ButtonContainer = styled.div`
	width: 80%;
`;

const IconContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	margin: 1rem 0;
	svg {
		height: 2rem;
		width: auto;
		fill: var(--purple);
	}
`;

const CTA = () => {
	return (
		<CallToAction>
			<SmallerHeader>Wow you've come a long way</SmallerHeader>
			<CenteredText>Feel free to contact me</CenteredText>
			<ButtonContainer>
				<Button>Contact</Button>
			</ButtonContainer>
			<CenteredText>And take a look/follow me here!</CenteredText>
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
		</CallToAction>
	);
};

export default CTA;
