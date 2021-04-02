import styled from "styled-components";

export const Button = styled.button `
	height: 2.2rem;
	width: 100%;
	background-color: var(--purple);
	border: 1px solid var(--purple);
	font-weight: bold;
	border-radius: var(--border-radius);
	transition: background-color 0.15s ease;
	color: var(--buttonText);
    
	&:hover {
		background-color: var(--bg);
		cursor: pointer;

	}
	&:active {
		opacity: 0.9;
	}
`