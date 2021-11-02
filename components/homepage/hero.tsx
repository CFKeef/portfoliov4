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
				My interest in the web comes from spending my childhood playing random MMOs and browsing the web. I love being able to contribute to it, I get satisfaction from building things that can be accessed by people worldwide and most of all I love the constant learning that comes from this field.
			</ParagraphText>
			<ParagraphText>
				Currently looking for Early Careers/Junior positions in Software Engineering
			</ParagraphText>
		</React.Fragment>
	);
};

export default Hero;
