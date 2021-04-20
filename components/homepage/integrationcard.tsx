import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Spinner from "../general/spinner";
import { IntegrationData } from "./Integrations";

const Integration = styled.li`
	border-radius: var(--border-radius);
	border: 2px solid var(--purple);
	display: flex;
	justify-content: center;
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

interface CardProps {
	connection: IntegrationData;
}

const IntegrationCard: React.FunctionComponent<CardProps> = ({
	connection,
}): JSX.Element => {
	const { data, isLoading } = useQuery(connection.id, connection.queryFn);

	const LoadingComponent = () => <Spinner />;
	const DataComponent = () => (
		<React.Fragment>
			<IntegrationKeyText>{connection.label}</IntegrationKeyText>
			<IntegrationValueText>{data as number}</IntegrationValueText>
		</React.Fragment>
	);

	return (
		<Integration key={connection.id}>
			{isLoading && <LoadingComponent />}
			{data && <DataComponent />}
		</Integration>
	);
};

export default IntegrationCard;
