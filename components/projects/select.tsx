import React from "react";
import Select from "react-select";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
	@media (max-width: 30em) {
		width: 100%;
	}
	.Select__control {
		background-color: var(--fg);
		border: 2px solid var(--purple);
		box-shadow: none;
		outline: none;
		&:hover {
			border-color: var(--purple);
		}
		.Select__indicators .Select__dropdown-indicator {
			transition: all 0.25s ease;
			transform: rotate(180deg);
			svg {
				color: var(--purple);
			}
		}
	}

	.Select__clear-indicator {
		svg {
			color: var(--purple);
			transition: all 1s ease;
			transform: rotate(180deg);
		}
		&:hover {
			svg,
			path {
				color: var(--purple);
			}
			opacity: 0.9;
			cursor: pointer;
		}
	}

	.Select__indicator-separator {
		display: none;
	}
	.Select__control--menu-is-open
		> .Select__indicators
		> .Select__dropdown-indicator {
		transition: all 0.3s ease;
		transform: rotate(0deg);
		svg {
			color: var(--purple);
		}
	}
	.Select__single-value {
		color: var(--purple);
	}
	.Select__menu {
		background-color: var(--fg);
		border: var(--accent2) 2px solid;
		color: var(--purple);
		.Select__menu-list {
			.Select__option {
				&:hover {
					background-color: var(--purple);
					color: white;
					cursor: pointer;
				}
			}
			.Select__option--is-selected {
				background-color: var(--purple);
				color: white;
			}
		}
	}
`;

const SelectContainer = styled.div`
	@media (max-width: 30em) {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	@media (min-width: 30em) {
		width: 30%;
	}
`;

const SelectLabel = styled.label`
	margin: 0;
	font-size: 1.1rem;
	color: var(--text);
	width: 100%;
	margin: 0.5rem 0 1rem 0;

	@media (max-width: 30em) {
		text-align: center;
	}
	@media (min-width: 30em) {
		text-align: left;
	}
`;

type Item = { label: string; value: string };

interface SelectProps {
	data: Item[] | null | undefined;
	onSelect: (select: Item) => void;
}

const ProjectSelect: React.FunctionComponent<SelectProps> = ({
	data,
	onSelect,
}): JSX.Element => {
	return (
		<SelectContainer>
			<SelectLabel>Filter by Technology</SelectLabel>
			<CustomSelect
				onChange={onSelect}
				options={data}
				classNamePrefix={"Select"}
				instanceId={"filter"}
				inputId={"filter"}
				isClearable={true}
			/>
		</SelectContainer>
	);
};

export default ProjectSelect;
