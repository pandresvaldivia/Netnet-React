import { useState } from 'react';
import { Loader } from '@components/atoms';
import { joiResolver } from '@hookform/resolvers/joi';
import { AuthFormData } from '@interfaces/form.interface';
import queryString from 'query-string';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { userAuthSchema } from '../../../common/schemas/user-auth';
import { LogIn } from '../../../services/helpers/auth.helper';

import SignInFormInput from './SignInFormInput';

const initialState = {
	email: '',
	password: '',
};

const SingInForm = () => {
	const [loginError, setLoginError] = useState<JSX.Element | null>(null);
	const location = useLocation();
	const { email: defaultEmail } = queryString.parse(location.search);

	if (defaultEmail) {
		initialState.email = defaultEmail as string;
	}

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<AuthFormData>({
		defaultValues: initialState,
		resolver: joiResolver(userAuthSchema),
		mode: 'onTouched',
	});

	const onSubmit = async (data: AuthFormData) => {
		const { email, password } = data;

		const error = await LogIn(email, password);

		if (error) {
			setLoginError(error);
		}
	};

	return (
		<>
			{loginError && (
				<p role="alert" className="bg-netnet-orange px-5 py-2.5 rounded mb-4 text-sm">
					{loginError}
				</p>
			)}
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
				<button
					disabled={isSubmitting}
					className="relative text-base bg-netnet-red text-white py-4 px-5 w-full rounded"
				>
					{!isSubmitting && 'Sign In'}
					{isSubmitting && <Loader className="h-8 border-t-white -my-2" />}
				</button>
			</form>
		</>
	);
};

export default SingInForm;
