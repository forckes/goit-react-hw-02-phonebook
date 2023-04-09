import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "components/Box/Box";
import { Formik, Form, Field } from "formik";
import { Label, Button } from "./PhoneForm.styled";

const StyledForm = styled(Form)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;
const Input = styled(Field)`
	border: 1px solid #71717171;
	border-radius: 4px;
	height: 26px;
	font-size: 22px;
`;

class PhoneForm extends Component {
	state = {
		name: "",
		number: ""
	};

	handleSubmit = (values, { resetForm }) => {
		this.props.onCreateContact(values.name, values.number);
		resetForm();
	};
	render() {
		return (
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				flexDirection='column'
			>
				<Formik onSubmit={this.handleSubmit} initialValues={this.state}>
					<StyledForm>
						<Label htmlFor='name'>
							Name
							<Input
								type='text'
								name='name'
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
								required
							/>
						</Label>
						<Label htmlFor='number'>
							Number
							<Input
								type='tel'
								name='number'
								pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
								title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
								required
							/>
						</Label>
						<Button type='submit'>Add contact</Button>
					</StyledForm>
				</Formik>
			</Box>
		);
	}
}
export default PhoneForm;
