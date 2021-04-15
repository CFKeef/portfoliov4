import React from "react";
import styled from "styled-components";
import { ParagraphText } from "../general/text";

const CardContainer = styled.li`
	background-color: var(--fg);
	border: 2px solid var(--purple);
	border-radius: var(--border-radius);
	flex: 0 0 31%;
	margin: 1rem 0;
`;

const CardTitle = styled.h4`
	text-align: center;
	color: white;
	margin: 1rem 0;
`;

const Card = (): JSX.Element => {
	return (
		<CardContainer>
			<img
				src={
					"https://images.ctfassets.net/x9b4dj03j7ed/3T0Wdk74W9rhOcsUtNfOKm/92b377ee5e899fa6a5007f7a744ca048/coursor.svg"
				}
			/>
			<CardTitle>Coursor</CardTitle>
			<ParagraphText style={{ width: "100%" }}>
				Course management dashboard for students and professors
			</ParagraphText>
		</CardContainer>
	);
};

export default Card;
