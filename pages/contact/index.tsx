import React from "react";
import styled from "styled-components";
import Form from "../../components/contact/form";
import Layout from "../../components/general/Layout";
import { HeaderText, SectionSplitterText } from "../../components/general/text";

const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Contact = (): JSX.Element => {
	return (
		<Layout title="Contact Me! | Patryck.dev">
			<Container>
				<SectionSplitterText>Contact</SectionSplitterText>
				<HeaderText>Let's Chat</HeaderText>
				<Form />
			</Container>
		</Layout>
	);
};

export default Contact;
