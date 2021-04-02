import Link from "next/link";
import Hero from "../components/homepage/hero";
import Layout from "../components/general/Layout";
import Integrations from "../components/homepage/Integrations";

const IndexPage = () => (
	<Layout title="Patryck's Portfolio">
		<Hero />
		<Integrations />
	</Layout>
);

export default IndexPage;
