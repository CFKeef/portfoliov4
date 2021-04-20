import Hero from "../components/homepage/hero";
import Layout from "../components/general/Layout";
import Integrations from "../components/homepage/Integrations";
import axios from "axios";
import CTA from "../components/homepage/cta";
import { fetchProjects } from "../utils/integrations";

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

		<CTA />
	</Layout>
);

export default IndexPage;
