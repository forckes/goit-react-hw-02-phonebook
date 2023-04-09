import styled from "styled-components";

export const Label = styled.label`
	font-size: ${p => p.theme.fontSizes.m};
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	display: flex;
	border-radius: ${p => p.theme.radii.normal};
	border: ${p => p.theme.borders.none};
	color: ${p => p.theme.colors.white};
	background-color: ${p => p.theme.colors.primary};
	padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
	font-size: ${p => p.theme.fontSizes.s};
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		opacity: 0.7;
	}
`;
