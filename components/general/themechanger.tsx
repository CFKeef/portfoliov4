import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

const Skeleton = styled.div`
	background-color: var(--fg);
`;

const ThemeButton = styled.button`
	background-color: var(--themeFg);
	width: 2.5rem;
	height: 2.5rem;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: calc(var(--border-radius) / 2);
	svg {
		fill: var(--themeFill);
	}
`;

const ThemeChanger: React.FunctionComponent = () => {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	const handleChange = (theme: string) => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return <Skeleton />;

	return (
		<ThemeButton onClick={() => handleChange(theme as string)}>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</ThemeButton>
	);
};

export default ThemeChanger;
