import { Box } from "components/Box/Box";
import Filter from "components/Filter/Filter";
import { ContactsList, Contact } from "./Contacts.styled";
import styled from "styled-components";
import IconButton from "components/IconButton/IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/delete-2-svgrepo-com.svg";

export const DeleteButton = styled(IconButton)`
	background-color: ${p => p.theme.colors.red};
	border: ${p => p.theme.borders.none};
	border-radius: ${p => p.theme.radii.normal};
	color: ${p => p.theme.colors.white};
	font-size: ${p => p.theme.fontSizes.m};
	padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		opacity: 0.7;
	}
`;

export default function Contacts({ contacts, onChange, value, onDelete }) {
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<Filter onChange={onChange} value={value} />
			<ContactsList type='none'>
				{contacts.map(({ id, contactName, tel }) => (
					<Contact key={id}>
						{contactName}: {tel}
						<DeleteButton onClick={() => onDelete(id)} type='button'>
							Delete
							<DeleteIcon width='40px' height='40px' />
						</DeleteButton>
					</Contact>
				))}
			</ContactsList>
		</Box>
	);
}
