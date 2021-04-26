import React from "react";
import { RowList } from "../general/containers";
import { SectionSplitterText } from "../general/text";
import { QueryFunction } from "react-query";
import {
	fetchGithubCommits,
	fetchProjectStats,
} from "../../utils/integrations";
import IntegrationCard from "./integrationcard";

export type IntegrationData = {
	id: string;
	label: string;
	unit: string;
	queryFn: QueryFunction;
};

const Integrations: React.FunctionComponent = (): JSX.Element => {
	/**
	 * Generates the little content blocks that pull info from somewhere and display
	 */
	const generateIntegrations = () => {
		const integrations: IntegrationData[] = [
			{
				id: "github",
				label: "Github Commits",
				unit: "commits",
				queryFn: fetchGithubCommits,
			},
			{
				id: "projects",
				label: "Published Projects",
				unit: "deployed",
				queryFn: fetchProjectStats,
			},
		];
		return integrations.map((connection: IntegrationData) => {
			return (
				<IntegrationCard key={connection.id} connection={connection} />
			);
		});
	};
	return (
		<React.Fragment>
			<SectionSplitterText>Activity</SectionSplitterText>
			<RowList>{generateIntegrations()}</RowList>
		</React.Fragment>
	);
};

export default Integrations;
