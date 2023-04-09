import { Box } from "components/Box/Box";
import styled from "styled-components";

const StyledFilter = styled.input`
	border: 1px solid #71717171;
	border-radius: 4px;
	height: 26px;
	font-size: 22px;
`;

export default function Filter({ value, onChange }) {
	return (
		<Box>
			<StyledFilter
				placeholder='Filter'
				type='text'
				value={value}
				onChange={onChange}
			/>
		</Box>
	);
}
