import React, { useState } from "react";
import { GetStaticProps } from "next";
import ProjectSelect from "./select";
import styled, { css } from "styled-components";
import { SectionSplitterText } from "../general/text";
import Project from "../general/projectcard/withcontent";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import {
	fetchFilters,
	fetchPaginatedProjects,
	fetchProjects,
} from "../../utils/integrations";
import LoadingCard from "../general/projectcard/skeleton";
import { Skeleton } from "../general/projectcard/components";
import { Fields } from "../../interfaces";

const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ListBar = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

const ListContainer = styled.ul`
	width: 100%;
	display: flex;

	@media (max-width: 30em) {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 30em) {
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

const ListControlsContainer = styled.div`
	width: 100%;
	margin: 1rem 0;
	display: flex;
	justify-content: center;
	align-items: center;

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;

		li {
			margin: 0 0.2rem;
		}
	}
`;

const activeButton = css`
	&:hover {
		cursor: not-allowed;
	}
`;

const inactiveButton = css`
	&:hover {
		border: 2px solid var(--purple);
		color: var(--purple);
		cursor: pointer;
	}
	&:active {
		opacity: 0.9;
	}
`;
const Control = styled.li<{ selected: boolean }>`
	height: 2.5rem;
	width: 2.5rem;
	border-radius: calc(var(--border-radius) / 2);
	display: flex;
	justify-content: center;
	align-items: center;

	button {
		height: 100%;
		width: 100%;
		background-color: ${({ selected }) =>
			selected ? "var(--purple)" : "var(--bg)"};
		border: ${({ selected }) =>
			selected
				? " 2px solid var(--purple)"
				: " 2px solid rgba(255, 255, 255, 0.4)"};
		font-weight: bold;
		border-radius: calc(var(--border-radius) / 2);
		transition: background-color 0.15s ease;
		color: ${({ selected }) =>
			selected ? "var(--buttonText)" : "rgba(255, 255, 255, 0.4)"};

		${({ selected }) => (selected ? activeButton : inactiveButton)}
	}
`;

const options = [
	{ value: "react", label: "React" },
	{ value: "typescript", label: "Typescript" },
	{ value: "nextjs", label: "NextJS" },
	{ value: "sql", label: "SQL" },
	{ value: "express", label: "Express" },
	{ value: "nosql", label: "NoSQL" },
	{ value: "redux", label: "Redux" },
];

const ProjectList = (): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const [page, setPage] = useState(1);
	const [isFiltered, setIsFiltered] = useState(false);
	const [filteredData, setFilteredData] = useState();
	const [selectedFilter, setSelectedFilter] = useState();
	const fetchProjects = async (page: number) =>
		await fetchPaginatedProjects(page);

	const { isFetching, isLoading, data } = useQuery(["cardData", page], () =>
		fetchProjects(page)
	);

	const { isLoading: filterIsLoading, data: filterData } = useQuery(
		"filters",
		fetchFilters
	);

	const handleRender = () => {
		if (isLoading || isFetching)
			return (
				<React.Fragment>
					<LoadingCard />
					<LoadingCard />
					<LoadingCard />
					<LoadingCard />
				</React.Fragment>
			);
		else if (data) {
			return generateProjectCards();
		}
	};

	const generateControls = () => {
		const count = data?.projects.totalPages;
		const arr = Array.from(Array(count), (_e, i) => i + 1);

		return arr.map((num) => {
			const selected: boolean = num == page;

			return (
				<Control selected={selected} key={"page" + num + "control"}>
					<button onClick={() => setPage(num)}>{num}</button>
				</Control>
			);
		});
	};

	const generateProjectCards = () => {
		if (!isFiltered)
			return data?.projects?.items?.map((project, index) => {
				return (
					<Project
						key={project.repoName}
						commit={data.commits.items[index]}
						data={project}
					/>
				);
			});
		else {
			return filteredData?.map((project: Fields) => {
				const commit = data?.commits.items.find(
					(commit) =>
						commit.project.toLowerCase() ===
						project.repoName.toLowerCase()
				);

				return (
					<Project
						key={project.repoName}
						commit={
							commit
								? commit
								: {
										project: project.repoName,
										message: "Updated index.tsx",
										commitPosted: new Date(),
										// eslint-disable-next-line no-mixed-spaces-and-tabs
								  }
						}
						data={project}
					/>
				);
			});
		}
	};

	const handleSelect = (e) => {
		console.log(e);
	};

	return (
		<Container>
			<ListBar>
				{filterData?.filters && (
					<ProjectSelect onSelect={handleSelect} data={filterData.filters} />
				)}
				{!filterData && <ProjectSelect onSelect={handleSelect} data={options} />}
			</ListBar>
			<SectionSplitterText>
				{isLoading ? "Loading" : "Results"}
			</SectionSplitterText>
			<ListContainer>{handleRender()}</ListContainer>
			{data && (
				<ListControlsContainer>
					<ul>{generateControls()}</ul>
				</ListControlsContainer>
			)}
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery("cardData", () => fetchProjects());

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
export default ProjectList;
