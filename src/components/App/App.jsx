import React, { Component } from "react";
import shortid from "shortid";
import { Box } from "../Box/Box";
import Title from "components/Title/Title";
import PhoneForm from "components/PhoneForm/PhoneForm";
import Contacts from "components/Contacts/Contacts";

class App extends Component {
	state = {
		contacts: [],
		filter: ""
	};

	componentDidMount() {
		const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
		if (parsedContacts) {
			this.setState({ contacts: parsedContacts });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const actualContacts = this.state.contacts;
		const prevContacts = prevState.contacts;

		if (actualContacts !== prevContacts) {
			localStorage.setItem("contacts", JSON.stringify(actualContacts));
		}
	}

	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value });
	};
	createContact = (contactName, tel) => {
		const isContactExists = this.state.contacts.some(
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
		this.setState(prevState => ({
			contacts: [contact, ...prevState.contacts]
		}));
	};
	handleDelete = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId)
		}));
	};

	render() {
		const { contacts, filter } = this.state;
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
				<PhoneForm onCreateContact={this.createContact} />
				<Title text={"Contacts"} />
				<Contacts
					onChange={this.changeFilter}
					value={filter}
					contacts={visibleContacts}
					onDelete={this.handleDelete}
				/>
			</Box>
		);
	}
}

export default App;
