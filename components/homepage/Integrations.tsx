import React from "react";
import { RowList, SingleColumnContentContainer } from "../general/containers";
import { SectionSplitterText } from "../general/text";
import styled from "styled-components";

type Integration = {
	id: string;
	label: string;
	value: number;
	unit: string;
};

const Integration = styled.li`
	border-radius: var(--border-radius);
	border: 1px solid var(--purple);
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	text-align: center;
	flex-direction: column;
	margin: 1rem 0.5rem;

	@media (min-width: 30em) {
		height: 5rem;
		flex: 0 0 25%;
	}
	@media (max-width: 30em) {
		height: 5rem;
		width: 100%;
	}
`;

const IntegrationKeyText = styled.span`
	color: var(--text);
	font-size: 1rem;
	width: 100%;
`;

const IntegrationValueText = styled.span`
	font-weight: 600;
	color: var(--text);
	font-size: 1.5rem;
	width: 100%;
`;

const Integrations: React.FunctionComponent = (): JSX.Element => {
	/**
	 * Generates the little content blocks that pull info from somewhere and display
	 */
	const generateIntegrations = () => {
		const integrations: Integration[] = [
			{
				id: "github",
				label: "Github Commits",
				value: 882,
				unit: "commits",
			},
			{
				id: "caffeine",
				label: "Milligrams of Caffeine Consumed",
				value: 370,
				unit: "mg",
			},
			{
				id: "projects",
				label: "Published Projects",
				value: 5,
				unit: "deployed",
			},
		];
		return integrations.map((connection: Integration) => {
			return (
				<Integration key={connection.id}>
					<IntegrationKeyText>{connection.label}</IntegrationKeyText>
					<IntegrationValueText>
						{connection.value}
					</IntegrationValueText>
				</Integration>
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
