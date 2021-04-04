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
	height: 5rem;
	margin: 1rem 0.5rem;
	flex: 0 0 25%;
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

const Integrations = (): JSX.Element => {
	/**
	 * Generates the little content blocks that pull info from somewhere and display
	 */
	const generateIntegrations = () => {
		const integrations: Integration[] = [
			{
				id: "github",
				label: "Github Commits (Past Year)",
				value: 748,
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
		<SingleColumnContentContainer>
			<SectionSplitterText>Activity</SectionSplitterText>
			<RowList>{generateIntegrations()}</RowList>
		</SingleColumnContentContainer>
	);
};

export default Integrations;
