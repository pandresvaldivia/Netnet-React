import { FormEvent } from 'react';

import useForm from '../../../common/hooks/useForm';
import { UserAuth } from '../../../common/interfaces/user.interface';
import { registerUser } from '../../../services/helpers/auth.helper';

const initialState = {
	email: '',
	password: '',
};

const SignupForm = () => {
	const { values, handleOnChange } = useForm<UserAuth>(initialState);
	const { email, password } = values;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		registerUser(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center text-netnet-dark">
			<h3 className="text-white">
				Ready to watch? Enter your email to create or restart your membership.
			</h3>
			<input
				name="email"
				type="text"
				placeholder="Email address"
				value={email}
				onChange={handleOnChange}
			/>
			<input
				name="password"
				type="password"
				placeholder="Password"
				value={password}
				onChange={handleOnChange}
			/>
			<button className="text-base bg-netnet-red text-white">Get Started</button>
		</form>
	);
};

export default SignupForm;
