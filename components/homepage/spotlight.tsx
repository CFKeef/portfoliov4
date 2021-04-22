import React from "react";
import { SingleColumnContentContainer } from "../general/containers/index";
import Project from "../general/project";
import { SectionSplitterText } from "../general/text";
import styled from "styled-components";
import { Proj } from "../../interfaces";

const Spacer = styled.br`
	margin-top: 1rem;
`;

interface SpotLightProps {
	project: Proj;
}

const Spotlight: React.FunctionComponent<SpotLightProps> = ({
	project,
}: SpotLightProps) => {
	return (
		<SingleColumnContentContainer>
			<SectionSplitterText>Current Project</SectionSplitterText>
			<Spacer />
			
		</SingleColumnContentContainer>
	);
};

export default Spotlight;
