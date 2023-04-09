import styled from "styled-components";

export const ContactsList = styled.ul`
	margin: ${p => p.theme.space[4]}px ${p => p.theme.space[0]}px
		${p => p.theme.space[0]}px ${p => p.theme.space[0]}px;
	padding: ${p => p.theme.space[0]}px;
`;
export const Contact = styled.ul`
	margin-bottom: ${p => p.theme.space[3]}px;
	font-size: ${p => p.theme.fontSizes.m};
	display: flex;
	justify-content: space-between;
	gap: ${p => p.theme.space[6]}px;
`;
export const DeleteButton = styled.button`
	background-color: ${p => p.theme.colors.red};
	border: ${p => p.theme.borders.none};
	border-radius: ${p => p.theme.radii.normal};
	color: ${p => p.theme.colors.white};
	font-size: ${p => p.theme.fontSizes.s};
	padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		opacity: 0.7;
	}
`;
