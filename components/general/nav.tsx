import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { List } from "./containers";
import ThemeChanger from "./themechanger";

const NavContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	margin-top: 1rem;
	@media (min-width: 30em) {
		width: 75%;
	}
`;

const NavList = styled(List)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 30%;
	@media (max-width: 30em) {
		width: 65%;
	}
`;
const NavEntry = styled.a`
	font-size: 1rem;
	margin: 0.5rem 0;
	color: var(--text);
	text-decoration: none;
`;

const Nav = (): JSX.Element => {
	return (
		<NavContainer>
			<ThemeChanger />
			<NavList>
				<Link href={"/"} passHref={true}>
					<NavEntry href={"/"}>Home</NavEntry>
				</Link>
				<Link href={"/projects"} passHref={true}>
					<NavEntry href={"/projects"}>Projects</NavEntry>
				</Link>
				<Link href={"/contact"} passHref={true}>
					<NavEntry href={"/contact"}>Contact</NavEntry>
				</Link>
			</NavList>
		</NavContainer>
	);
};

export default Nav;
