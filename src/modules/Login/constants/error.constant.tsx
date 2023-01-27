import { Link } from 'react-router-dom';

import { ERROR_MESSAGE } from '../../../services/constants/error.constant';

export const LOGIN_ERROR_MESSAGE = {
	[ERROR_MESSAGE.WRONG_PASSWORD]: (
		<>
			<span className="font-semibold">Incorrect password.</span> Please try again
		</>
	),
	[ERROR_MESSAGE.USER_NOT_FOUND]: (
		<>
			Sorry, we can't find an account with this email address. Please try again or{' '}
			<Link to="/" className="underline">
				create a new account
			</Link>
			.
		</>
	),
};
