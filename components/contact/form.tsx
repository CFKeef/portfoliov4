import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../general/input";
import { Input, InputLabel, TextBox } from "./styledcomponents";

interface FormData {
	email: string;
	name: string;
	subject: string;
	body: string;
}

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (min-width: 30em) {
		width: 30%;
	}
	@media (max-width: 30em) {
		width: 100%;
	}
`;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = (data: FormData) => console.log(data);

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<InputLabel htmlFor="name">Name </InputLabel>
			<Input
				type="text"
				placeholder="Name"
				{...register("name", { required: true })}
			/>
			<InputLabel htmlFor="email">Email</InputLabel>
			<Input
				type="email"
				placeholder="Email Address"
				{...register("email", { required: true })}
			/>
			<InputLabel htmlFor="subject">Email</InputLabel>
			<Input
				type="text"
				placeholder="Subject"
				{...register("subject", { required: true })}
			/>
			<InputLabel htmlFor="body">Message</InputLabel>
			<TextBox
				placeholder="Message Body"
				rows={10}
				{...register("body", { required: true })}
			/>
			<Button type="submit">Submit</Button>
		</StyledForm>
	);
};

export default Form;
