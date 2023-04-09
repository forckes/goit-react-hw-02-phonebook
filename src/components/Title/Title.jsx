import styled from "styled-components";

const StyledTitle = styled.h1`
	font-size: ${p => p.theme.fontSizes.xl};
	margin: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px
		${p => p.theme.space[4]}px ${p => p.theme.space[0]}px;
	padding: ${p => p.theme.space[0]};
`;

export default function Title({ text }) {
	return <StyledTitle>{text}</StyledTitle>;
}
