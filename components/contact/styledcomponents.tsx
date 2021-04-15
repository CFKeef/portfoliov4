import styled from "styled-components";

export const Input = styled.input`
	background-color: var(--fg);
	border: 2px solid var(--bg);
	border-radius: var(--border-radius);
	color: white;
	height: 2.5rem;
	display: inline-flex;
	padding: 0 0.75rem;
	transition: fill 0.15s ease;
	width: 100%;
	box-sizing: border-box;
	justify-content: flex-start;
	align-items: center;

	&:focus {
		border-radius: var(--border-radius);
		outline: none;
		& + svg {
			transition: fill 0.15s ease;
			path {
				fill: var(--purple);
			}
		}
	}
`;

export const TextBox = styled.textarea`
	background-color: var(--fg);
	border: 2px solid var(--bg);
	border-radius: var(--border-radius);
	color: white;
	display: inline-flex;
	padding: 0.75rem;
	margin-bottom: 1rem;
	transition: fill 0.15s ease;
	width: 100%;
	box-sizing: border-box;
	justify-content: flex-start;
	align-items: center;
	resize: none;
	&:focus {
		border-radius: var(--border-radius);
		outline: none;
	}
`;

export const InputLabel = styled.label`
	font-size: 1rem;
	color: white;
	text-transform: capitalize;
	margin: 0.5rem 0;
	letter-spacing: var(--letter-spacing);
	width: 100%;
	text-align: left;
`;
