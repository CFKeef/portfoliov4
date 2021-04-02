import React from "react";
import { List, SingleColumnContentContainer } from "../general/containers";
import { ParagraphText, SectionSplitterText } from "../general/text";
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
	flex-direction: column;
	height: 5rem;
	margin: 1rem 0;

	@media (max-width: 30em) {
		width: 100%;
	}
	@media (min-width: 30em) {
		width: 40%;
	}
`;

const IntegrationKeyText = styled.span`
	color: var(--text);
	font-size: 1rem;
	width: 100%;
	margin-left: 0.75rem;
`;

const IntegrationValueText = styled.span`
	font-weight: 600;
	color: var(--text);
	font-size: 1.5rem;
	width: 100%;
	margin-left: 0.75rem;
`;

const Integrations = () => {
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
			<List>{generateIntegrations()}</List>
		</SingleColumnContentContainer>
	);
};

export default Integrations;
