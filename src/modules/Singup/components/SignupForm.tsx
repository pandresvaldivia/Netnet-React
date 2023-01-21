import { joiResolver } from '@hookform/resolvers/joi';
import { AuthFormData } from '@interfaces/form.interface';
import { useForm } from 'react-hook-form';

import { userAuthSchema } from '../../../common/schemas/user-auth';
import { registerUser } from '../../../services/helpers/auth.helper';
import SignInFormInput from '../../Login/components/SignInFormInput';

const initialState = {
	email: '',
	password: '',
};

const SignupForm = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormData>({
		defaultValues: initialState,
		mode: 'onTouched',
		resolver: joiResolver(userAuthSchema),
	});

	const onSubmit = (data: AuthFormData) => {
		const { email, password } = data;

		registerUser(email, password);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center text-netnet-dark">
			<h3 className="text-white text-lg mb-2.5">
				Ready to watch? Enter your email to create or restart your membership.
			</h3>
			<div className="flex flex-col gap-4 w-full mb-3">
				<SignInFormInput
					id="email"
					type="text"
					label="Email address"
					className="bg-white"
					labelClasses="text-netnet-grey-200"
					autoComplete="email"
					errors={errors.email}
					currentValue={watch('email')}
					{...register('email')}
				/>
				<SignInFormInput
					id="password"
					type="password"
					label="Password"
					labelClasses="text-netnet-grey-200"
					autoComplete="current-password"
					errors={errors.password}
					currentValue={watch('password')}
					{...register('password')}
				/>
			</div>
			<button className="text-base bg-netnet-red-100 text-white px-4 py-2">Get Started</button>
		</form>
	);
};

export default SignupForm;
