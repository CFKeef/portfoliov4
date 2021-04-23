import styled from "styled-components";

export const ProjectContainer = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;

	border: 2px solid var(--purple);
	border-radius: var(--border-radius);

	@media (min-width: 30em) {
		flex: 0 0 48%;
		min-height: 36rem;
		margin: 1.5rem 0;
	}

	@media (max-width: 30em) {
		height: 36rem;
		width: 100%;
		margin: 1rem 0;
	}
`;
export const PositionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	margin: 20px;
	width: calc(100% - 40px);
	min-height: calc(36rem - 40px);
`;
export const TitleBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	margin: 0.5rem 0 0 0;

	h4 {
		font-size: 1.6rem;
		text-align: left;
		display: inline;
		color: white;
		width: 75%;
	}
`;
export const Anchor = styled.a`
	text-decoration: none;
	height: 2rem;
	width: 20%;
	background-color: var(--bg);
	border: 2px solid rgba(255, 255, 255, 0.4);
	font-weight: normal;
	border-radius: calc(var(--border-radius) / 2);
	transition: background-color 0.15s ease;
	color: rgba(255, 255, 255, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		border: 2px solid var(--purple);
		color: var(--purple);
		cursor: pointer;
	}
	&:active {
		opacity: 0.9;
	}
`;
export const Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	margin: 10px 0 0 0;
`;
export const SectionTitle = styled.p`
	width: 100%;
	text-align: left;
	color: white;
	font-weight: 600;
	font-size: 1.1rem;
	margin: 0 0 5px 0;
`;
export const SectionBody = styled.p`
	width: 100%;
	text-align: left;
	color: white;
	font-weight: normal;
	font-size: 1rem;
	margin: 0;
	opacity: 0.8;
`;
export const TabGroup = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	width: 100%;
	overflow: hidden;
	margin: 0.5rem 0 0 0;
	padding: 0;
	list-style-type: none;

	li {
		margin: 0 1rem 0 0;
	}
`;
export const CommitBlock = styled.div`
	width: 100%;
	border-radius: var(--border-radius);
	background-color: rgba(219, 59, 147, 0.5);
	display: flex;
	justify-content: center;
	align-items: flex-start;

	p {
		margin: 0.5rem;
		color: white;
		opacity: 0.8;
		width: 100%;
	}
`;
export const GithubSection = styled(Section)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	margin-top: 0.5rem;
	img {
		height: 1.5rem;
		width: auto;
	}

	a {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		width: 70%;
	}
`;
export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;

	a {
		text-decoration: none;
		color: var(--buttonText);
		font-weight: 600;
		margin-left: 0.5rem;

		&:hover {
			text-decoration: underline;
		}
	}
`;
export const TimeText = styled.span`
	color: #fff;
	opacity: 0.4;
	text-align: right;
	width: 100%;
	font-size: 14px;
`;
export const ImageContainer = styled.div`
	@media (min-width: 30em) {
		height: 11rem;
	}
	width: 100%;
	img {
		height: auto;
		max-width: 100%;
		border-radius: calc(var(--border-radius) / 2);
	}
	[data-src]::before {
		content: "";
		display: block;
		height: auto;
		max-width: 100%;
		border-radius: calc(var(--border-radius) / 2);
		background-color: #72265e;
		padding-top: 100%;
	}
`;
export const GitAnchor = styled.a`
	&:hover {
		cursor: pointer;
	}
`;
export const openLinkInNewTab = (url: string) => {
	window.open(url, "_blank");
};

const SkeletonPulse = styled.div`
	display: inline-block;
	height: 100%;
	width: 100%;
	background: linear-gradient(0.25turn, transparent, #0c1c3d, transparent);
	background-size: 200% 200%;
	animation: pulse 3s ease-in-out infinite;

	@keyframes pulse {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: -135% 0%;
		}
	}
`;

export const Skeleton = styled(SkeletonPulse)`
	width: 5.5em;
	border-radius: calc(var(--border-radius) / 2);
	height: 100%;

	&::before {
		content: "\00a0";
	}
`;
