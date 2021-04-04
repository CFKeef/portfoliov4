import Hero from "../components/homepage/hero";
import Layout from "../components/general/Layout";
import Integrations from "../components/homepage/Integrations";
import Spotlight from "../components/homepage/spotlight";
import styled from "styled-components";
import Selected from "../components/homepage/selected";
import axios from "axios";
import CTA from "../components/homepage/cta";
import { getContributionsPastYear } from "../utils/githubAPI";

const Spacer = styled.br`
	margin: 1rem 0;
`;

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
}

const IndexPage: React.FunctionComponent<Props> = ({ data }) => (
	<Layout title="Patryck's Portfolio">
		<Hero />
		<Spacer />
		<Integrations />
		<Spacer />
		<Spotlight
			project={
				data.items.filter((element: { fields: { current: never } }) => {
					{
						return element.fields.current;
					}
				})[0].fields
			}
		/>
		<Spacer />
		<Selected
			projects={data.items.filter(
				(element: { fields: { current: never } }) => {
					return !element.fields.current;
				}
			)}
		/>
		<Spacer />
		<CTA />
		<Spacer />
	</Layout>
);

export default IndexPage;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
	const data = await axios.get(process.env.CONTENTFUL_LINK as string);
	const commits = await getContributionsPastYear();
	return {
		props: {
			data: data.data,
			commits: commits,
		},
		revalidate: 86400,
	};
};
