import React, { ReactNode } from "react";
import Head from "next/head";
import { ResponsiveContentContainer } from "./containers";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
	<ResponsiveContentContainer>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<header>
			<nav></nav>
		</header>
		{children}
		<footer></footer>
	</ResponsiveContentContainer>
);

export default Layout;
