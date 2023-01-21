import Joi from 'joi';

const passwordLengthMessage = 'Password should be between 6 and 60 characters';

export const userAuthSchema = Joi.object({
	email: Joi.string()
		.email({
			tlds: false,
		})
		.required()
		.messages({
			'string.empty': 'Email is required',
			'string.email': 'Please enter a valid email address',
			'any.required': 'Email is required',
		}),
	password: Joi.string()
		.required()
		.pattern(/^(?!\s*$).+/)
		.min(6)
		.max(60)
		.messages({
			'string.empty': 'Password is required',
			'any.required': 'Password is required',
			'string.min': passwordLengthMessage,
			'string.max': passwordLengthMessage,
			'string.pattern.base': 'Password is required',
		}),
});
