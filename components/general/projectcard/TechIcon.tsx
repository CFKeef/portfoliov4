import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import TypescriptIcon from "../../../public/images/typescript-icon.svg";
import ReactIcon from "../../../public/images/bxl-react.svg";
import PostgresIcon from "../../../public/images/file-type-pgsql.svg";
import NextIcon from "../../../public/images/nextjs-icon.svg";
import ElectronIcon from "../../../public/images/electron.svg";
import ExpoIcon from "../../../public/images/expo.svg";
import FastifyIcon from "../../../public/images/fastify.svg";
import JavascriptIcon from "../../../public/images/javascript.svg";
import MongoIcon from "../../../public/images/mongodb-icon.svg";
import ReduxIcon from "../../../public/images/redux.svg";
import ExpressIcon from "../../../public/images/expressjs-icon.svg";

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
			case "Electron":
				return ElectronIcon;
			case "Expo":
				return ExpoIcon;
			case "Fastify":
				return FastifyIcon;
			case "Javascript":
				return JavascriptIcon;
			case "Postgres":
				return PostgresIcon;
			case "NextJS":
				return NextIcon;
			case "React Native":
			case "React":
				return ReactIcon;
			case "Typescript":
				return TypescriptIcon;
			case "MongoDB":
				return MongoIcon;
			case "Redux":
				return ReduxIcon;
			case "Express":
				return ExpressIcon;
			default:
				return;
		}
	};

	const image = determineIcon();

	return (
		<IconContainer>
			<img src={image} alt={techName + " Icon"} data-tip={techName} />
			{image && <ReactTooltip backgroundColor={"#DB3B93"} />}
		</IconContainer>
	);
};

export default TechIcon;
