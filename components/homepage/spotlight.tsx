import React from "react";
import { SingleColumnContentContainer } from "../general/containers/index";
import { SectionSplitterText } from "../general/text";
import styled from "styled-components";

const Spacer = styled.br`
	margin-top: 1rem;
`;

const Spotlight: React.FunctionComponent = (): JSX.Element => {
	return (
		<SingleColumnContentContainer>
			<SectionSplitterText>Current Project</SectionSplitterText>
			<Spacer />
		</SingleColumnContentContainer>
	);
};

export default Spotlight;
