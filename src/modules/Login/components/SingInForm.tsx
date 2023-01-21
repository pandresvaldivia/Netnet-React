import { joiResolver } from '@hookform/resolvers/joi';
import { AuthFormData } from '@interfaces/form.interface';
import { useForm } from 'react-hook-form';

import { userAuthSchema } from '../../../common/schemas/user-auth';
import { LogIn } from '../../../services/helpers/auth.helper';

import SignInFormInput from './SignInFormInput';

const initialState = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormData>({
		defaultValues: initialState,
		resolver: joiResolver(userAuthSchema),
		mode: 'onTouched',
	});

	const onSubmit = (data: AuthFormData) => {
		const { email, password } = data;

		LogIn(email, password);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="text-netnet-dark mb-3">
			<div className="flex flex-col gap-4 mb-7">
				<SignInFormInput
					id="email"
					type="email"
					label="Email address"
					className="bg-netnet-grey-100 text-white"
					labelClasses="text-netnet-grey-200"
					autoComplete="email"
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('email')}
					currentValue={watch('email')}
					errors={errors.email}
				/>
				<SignInFormInput
					id="password"
					type="password"
					label="Password"
					className="bg-netnet-grey-100 text-white"
					labelClasses="text-netnet-grey-200"
					autoComplete="current-password"
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('password')}
					currentValue={watch('password')}
					errors={errors.password}
				/>
			</div>
			<button className="text-base bg-netnet-red text-white py-4 px-5 w-full rounded">
				Sign In
			</button>
		</form>
	);
};

export default SingInForm;
