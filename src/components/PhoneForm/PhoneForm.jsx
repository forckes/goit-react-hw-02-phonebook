import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "components/Box/Box";
import { Formik, Form, Field } from "formik";
import { Label } from "./PhoneForm.styled";
import IconButton from "components/IconButton/IconButton";
import { ReactComponent as AddIcon } from "../../icons/user-add-svgrepo-com.svg";

export const Button = styled(IconButton)`
	display: flex;
	border-radius: ${p => p.theme.radii.normal};
	border: ${p => p.theme.borders.none};
	color: ${p => p.theme.colors.white};
	background-color: ${p => p.theme.colors.primary};
	padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
	font-weight: ${p => p.theme.fontWeights.normal};
	font-size: ${p => p.theme.fontSizes.m};
	align-items: center;
	gap: ${p => p.theme.space[4]}px;
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		opacity: 0.7;
	}
`;

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
						<Button type='submit'>
							Add contact
							<AddIcon width='40px' fill='#fff' height='40px' />
						</Button>
					</StyledForm>
				</Formik>
			</Box>
		);
	}
}
export default PhoneForm;
