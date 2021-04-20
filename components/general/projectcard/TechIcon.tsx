import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import TypescriptIcon from "../../../public/images/typescript-icon.svg";
import ReactIcon from "../../../public/images/bxl-react.svg";
import PostgresIcon from "../../../public/images/file-type-pgsql.svg";
import NextIcon from "../../../public/images/nextjs-icon.svg";

const IconContainer = styled.li`
	padding-bottom: 0.5rem;
	img {
		height: 1.5rem;
		width: 1.5rem;

		border-radius: calc(var(--border-radius) / 3);
	}
`;

interface TechIconProps {
	techName: string;
}

const TechIcon: React.FunctionComponent<TechIconProps> = ({ techName }) => {
	const determineIcon = () => {
		switch (techName) {
			case "Postgres":
				return PostgresIcon;
			case "NextJS":
				return NextIcon;
			case "React":
				return ReactIcon;
			default:
				return TypescriptIcon;
		}
	};

	const image = determineIcon();

	return (
		<IconContainer>
			<img src={image} alt={techName + " Icon"} data-tip={techName} />
			<ReactTooltip backgroundColor={"#DB3B93"} />
		</IconContainer>
	);
};

export default TechIcon;
