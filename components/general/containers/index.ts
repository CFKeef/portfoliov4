import styled from "styled-components";

export const ResponsiveContentContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (max-width: 30em) {
		margin: 20px;
		width: calc(100% - 40px);
	}

	@media (min-width: 30em) {
		max-width: 68em;
		width: 100vw;
	}
`;

export const SingleColumnContentContainer = styled(ResponsiveContentContainer)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const List = styled.ul`
	list-style: none;
	padding: none;
	margin: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

export const RowList = styled(List)`
	@media (min-width: 30em) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (max-width: 30em) {
		flex-direction: column;
		justify-content: center;
	}
`;
