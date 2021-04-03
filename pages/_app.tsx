/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { reset } from "styled-modern-css-reset";
import { fonts } from "../utils/fonts";

const GlobalStyle = createGlobalStyle`
${reset}
${fonts}

body {
	font-family: "proxima_nova";
	--black: #000;
	--white: #fff;
	--purple: #DB3B93;
	--letter-spacing: -.025EM;
	--border-radius: .75REM;


	background-color: var(--bg);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
}

:root {
	--bg: var(--white);
	--fg: var(--black);
	--fgPurpleDark: #081228;
	--fgPurpleLighterDark: #191D3A; 
	--text: #000;
	--buttonText: #FFF;
	--themeFg: #DB3B93;
	--themeFill: #fff;
	--commitFill: #DB3B93;
	--accent1: #FAFAFA;
	--accent2: #EAEAEA;
	--accent3: #999;
	--accent4: #888;
	--accent5: #666;
	--accent6: #444;
	--accent7: #333;
	--accent8: #111;
} 
[data-theme="dark"] {
	--bg: #081228;
	--fg: #191D3A;
	--text: #FFF;
	--buttonText: #FFF;
	--themeFg: #191D3A;
	--themeFill: #DB3B93;
	--commitFill: #191D3A;
	--accent1: #111;
	--accent2: #333;
	--accent3: #444;
	--accent4: #666;
	--accent5: #888;
	--accent6: #999;
	--accent7: #EAEAEA;
	--accent8: #FAFAFA;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
	const queryClientRef = React.useRef();

	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}
	return (
		<>
			<QueryClientProvider client={queryClientRef.current}>
				<Hydrate state={pageProps.dehydratedState}>
					<GlobalStyle />
					<ThemeProvider defaultTheme="dark">
						<Component {...pageProps} />
					</ThemeProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
