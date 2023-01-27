import { Loader } from '@components/atoms';
import { chevron_right } from '@components/icons/C_icon';
import { joiResolver } from '@hookform/resolvers/joi';
import { AuthFormData } from '@interfaces/form.interface';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import IconWrapper from 'src/common/templates/IconWrapper';

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
		formState: { errors, isSubmitting },
	} = useForm<AuthFormData>({
		defaultValues: initialState,
		mode: 'onTouched',
		resolver: joiResolver(userAuthSchema),
	});
	const navigation = useNavigate();

	const onSubmit = async (data: AuthFormData) => {
		const { email, password } = data;

		const { redirect } = await registerUser(email, password);

		if (redirect) {
			navigation(`/login?email=${email}`, {
				replace: true,
			});
		}
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
			<button
				disabled={isSubmitting}
				className={classNames(
					{ 'bg-netnet-red-100/50 w-32': isSubmitting },
					'flex items-center justify-center gap-2 text-base bg-netnet-red-100 text-white px-4 py-2'
				)}
			>
				{!isSubmitting && (
					<>
						<span>Get Started</span>
						<IconWrapper icon={chevron_right} height="0.75rem" />
					</>
				)}
				{isSubmitting && <Loader className="border-t-white h-7 -my-0.5" />}
			</button>
		</form>
	);
};

export default SignupForm;
