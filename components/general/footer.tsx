import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { SectionSplitterText } from "./text";

import Resume from "../../public/GolebiewskiPatryckResume.pdf";

const FooterContainer = styled.footer`
	width: 100%;
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: row;
	border-top: 2px solid var(--purple);
`;

const Column = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	margin: 1rem 0;
`;

const ColumnHeader = styled(SectionSplitterText)`
	font-size: 0.8rem;
`;

export const ColumnEntry = styled.a`
	font-size: 0.8rem;
	margin: 0.5rem 0;
	color: var(--text);
	text-decoration: none;
`;

const Footer = (): JSX.Element => {
	return (
		<FooterContainer>
			<Column>
				<ColumnHeader>Pages</ColumnHeader>
				<Link href={"/"} passHref={true}>
					<ColumnEntry href={"/"}>Home</ColumnEntry>
				</Link>
				<Link href={"/projects"} passHref={true}>
					<ColumnEntry href={"/projects"}>Projects</ColumnEntry>
				</Link>
				<Link href={"/contact"} passHref={true}>
					<ColumnEntry href={"/contact"}>Contact</ColumnEntry>
				</Link>
			</Column>
			<Column>
				<ColumnHeader>Social</ColumnHeader>

				<ColumnEntry href={"https://github.com/CFKeef"} target="_blank">
					Github
				</ColumnEntry>

				<ColumnEntry
					href={"https://www.linkedin.com/in/patryckg/"}
					target="_blank"
				>
					Linkedin
				</ColumnEntry>
			</Column>
			<Column>
				<ColumnHeader>Documents</ColumnHeader>

				<ColumnEntry href={Resume} target="_blank">
					View Resume
				</ColumnEntry>
			</Column>
		</FooterContainer>
	);
};

export default Footer;
