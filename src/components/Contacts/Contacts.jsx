import { Box } from "components/Box/Box";
import Filter from "components/Filter/Filter";
import { ContactsList, Contact, DeleteButton } from "./Contacts.styled";

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
						</DeleteButton>
					</Contact>
				))}
			</ContactsList>
		</Box>
	);
}
