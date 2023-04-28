import React from "react";
import styled from "styled-components";
import { Box } from "components/Box/Box";
import { useForm } from "react-hook-form";
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

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;
const Input = styled.input`
	border: 1px solid #71717171;
	border-radius: 4px;
	height: 26px;
	font-size: 22px;
`;

export default function PhoneForm({ onCreateContact }) {
	const { register, handleSubmit, resetField } = useForm();

	const onHandleSubmit = ({ name, number }) => {
		onCreateContact(name, number);
		resetField("name");
		resetField("number");
	};

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
				<Label htmlFor='name'>
					Name
					<Input
						type='text'
						{...register("name")}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</Label>
				<Label htmlFor='number'>
					Number
					<Input
						type='tel'
						{...register("number")}
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
		</Box>
	);
}
