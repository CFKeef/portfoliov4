import Hero from "../components/homepage/hero";
import Layout from "../components/general/Layout";
import Integrations from "../components/homepage/Integrations";
import axios from "axios";
import CTA from "../components/homepage/cta";

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

const IndexPage: React.FunctionComponent<Props> = () => (
	<Layout title="Patryck's Portfolio">
		<Hero />
		<Integrations />
		{/* <Spotlight
			project={
				data.items.filter((element: { fields: { current: never } }) => {
					{
						return element.fields.current;
					}
				})[0].fields
			}
		/>
		<Selected
			projects={data.items.filter(
				(element: { fields: { current: never } }) => {
					return !element.fields.current;
				}
			)}
		/> */}
		<CTA />
	</Layout>
);

export default IndexPage;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
	const data = await axios.get(process.env.CONTENTFUL_LINK as string);

	return {
		props: {
			data: data.data,
		},
		revalidate: 86400,
	};
};
