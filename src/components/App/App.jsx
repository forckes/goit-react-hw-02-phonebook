import React, { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import shortid from "shortid";
import { Box } from "../Box/Box";
import Title from "components/Title/Title";
import PhoneForm from "components/PhoneForm/PhoneForm";
import Contacts from "components/Contacts/Contacts";

function App() {
	const [contacts, setContacts] = useLocalStorage("contacts", []);
	const [filter, setFilter] = useState("");

	const changeFilter = e => {
		setFilter(e.currentTarget.value);
	};
	const createContact = (contactName, tel) => {
		const isContactExists = contacts.some(
			contact => contact.contactName === contactName
		);
		const contact = {
			id: shortid.generate(),
			contactName,
			tel
		};
		if (isContactExists) {
			alert(`${contactName} is already in contacts`);
			return;
		}

		setContacts(prevState => [contact, ...prevState]);
	};
	const handleDelete = contactId => {
		setContacts(prevState =>
			prevState.filter(contact => contact.id !== contactId)
		);
	};

	const normalizedFilter = filter.toLowerCase();
	const visibleContacts = contacts.filter(contact =>
		contact.contactName.toLowerCase().includes(normalizedFilter)
	);

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			margin={4}
		>
			<Title text={"Phonebook"} />
			<PhoneForm onCreateContact={createContact} />
			<Title text={"Contacts"} />
			<Contacts
				onChange={changeFilter}
				value={filter}
				contacts={visibleContacts}
				onDelete={handleDelete}
			/>
		</Box>
	);
}

export default App;
