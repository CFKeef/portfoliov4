import React from "react";
import { useQuery } from "react-query";
import { Commit, Fields } from "../../interfaces";
import { fetchProjectByPriority } from "../../utils/integrations";
import { SingleColumnContentContainer } from "../general/containers/index";
import LoadingCard from "../general/projectcard/skeleton";
import Project from "../general/projectcard/withcontent";
import { SectionSplitterText } from "../general/text";

const Spotlight: React.FunctionComponent = (): JSX.Element => {
	const { data } = useQuery("cardData", () => fetchProjectByPriority(1));

	const generateCard = () => {
		if (data) {
			return (
				<Project
					commit={data.commit as Commit}
					data={data?.project as Fields}
				/>
			);
		} else {
			return <LoadingCard shouldGrow={true} />;
		}
	};

	return (
		<SingleColumnContentContainer>
			<SectionSplitterText>Current Project</SectionSplitterText>
			{generateCard()}
		</SingleColumnContentContainer>
	);
};

export default Spotlight;
