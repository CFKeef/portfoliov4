import Hero from "../components/homepage/hero";
import Layout from "../components/general/Layout";
import Integrations from "../components/homepage/Integrations";
import CTA from "../components/homepage/cta";
import React from "react";
import Spotlight from "../components/homepage/spotlight";
import styled from "styled-components";

type ContentfulRes = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	items: any;
	limit: number;
	skip: number;
	sys: { type: string };
	total: number;
};

interface Props {
	data: ContentfulRes;
	commits: number;
}

const SelectedProjectContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 30em) {
		width: 100%;
	}
	@media (min-width: 30em) {
		width: 50%;
	}
`;

const IndexPage: React.FunctionComponent<Props> = () => (
	<Layout title="Patryck's Portfolio">
		<Hero />
		<Integrations />
		<SelectedProjectContainer>
			<Spotlight />
		</SelectedProjectContainer>
		<CTA />
	</Layout>
);

export default IndexPage;
