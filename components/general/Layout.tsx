import React, { ReactNode } from "react";
import Head from "next/head";
import { ResponsiveContentContainer } from "./containers";
import Footer from "./footer";
import Nav from "./nav";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({
	children,
	title = "This is the default title",
}: Props): JSX.Element => (
	<ResponsiveContentContainer>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Nav />
		{children}
		<Footer />
	</ResponsiveContentContainer>
);

export default Layout;
