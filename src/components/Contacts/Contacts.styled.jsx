import styled from "styled-components";

export const ContactsList = styled.ul`
	margin: ${p => p.theme.space[4]}px ${p => p.theme.space[0]}px
		${p => p.theme.space[0]}px ${p => p.theme.space[0]}px;
	padding: ${p => p.theme.space[0]}px;
`;
export const Contact = styled.ul`
	margin-bottom: ${p => p.theme.space[3]}px;
	font-size: ${p => p.theme.fontSizes.l};
	font-weight: ${p => p.theme.fontWeights.bold};
	display: flex;
	justify-content: space-between;
	gap: ${p => p.theme.space[5]}px;
	align-items: center;
`;
