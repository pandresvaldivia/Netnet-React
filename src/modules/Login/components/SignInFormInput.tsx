import { forwardRef, InputHTMLAttributes } from 'react';
import { isStringEmpty } from '@helpers/string.helper';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form';

import SinginStyles from '../../../styles/components/molecules/signin-input.module.scss';

const SignInFormInput = forwardRef<HTMLInputElement, SignInFormInputProps>(
	({ id, label, className, labelClasses, errors, currentValue, ...rest }, ref) => {
		const isNotEmpty = !isStringEmpty(currentValue) && SinginStyles.hasValue;

		return (
			<div>
				<label className="relative block">
					<input
						ref={ref}
						id={id}
						className={classNames(
							SinginStyles.input,
							isNotEmpty,
							className,
							{
								'border-b-2 border-netnet-orange': errors,
							},
							'h-14 pt-4 px-5 rounded outline-none w-full'
						)}
						{...rest}
					/>
					<label
						htmlFor={id}
						className={classNames(
							labelClasses,
							'absolute top-1/2 left-5 -translate-y-1/2 text-smaller transition-all'
						)}
					>
						{label}
					</label>
				</label>
				{errors && (
					<p role="alert" className="text-netnet-orange text-sm px-1 py-1.5 text-left">
						{errors.message}
					</p>
				)}
			</div>
		);
	}
);

SignInFormInput.displayName = 'SignInFormInput';

type SigInInputType = {
	label: string;
	labelClasses?: string;
	errors?: FieldError;
	currentValue?: string;
};

type SignInFormInputProps = SigInInputType & InputHTMLAttributes<HTMLInputElement>;

export default SignInFormInput;
