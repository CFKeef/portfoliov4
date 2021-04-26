import React from "react";
import {
	HeaderText,
	ParagraphText,
	SectionSplitterText,
} from "../general/text/index";

const Hero: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<SectionSplitterText>Introduction</SectionSplitterText>
			<HeaderText>Hi, I'm Patryck</HeaderText>
			<ParagraphText>
				Currently I'm working with <u>Zephyr Monitors</u> as a Software
				Engineer.
			</ParagraphText>
			<ParagraphText>
				I'm pursuing a BA in Accounting and Computer Science at{" "}
				<u>Queens College</u>
			</ParagraphText>
		</React.Fragment>
	);
};

export default Hero;
