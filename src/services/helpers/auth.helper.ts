import { LOGIN_ERROR_MESSAGE } from '@modules/Login/constants/error.constant';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { ERROR_MESSAGE } from '../constants/error.constant';
import auth from '../firebase/firestore.service';
import { FirebaseError } from '../interfaces/error.interface';

export const registerUser = async (email: string, password: string) => {
	const redirectToLogin = {
		redirect: false,
	};

	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.warn(`User ${userCredential.user} created`);
		})
		.catch((error: FirebaseError) => {
			if (error.code === ERROR_MESSAGE.EMAIL_EXISTS) {
				redirectToLogin.redirect = true;
			}
		});

	return redirectToLogin;
};

export const LogIn = async (email: string, password: string) => {
	let loginError: JSX.Element | undefined;

	await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.warn(`User ${userCredential.user} logged in`);
		})
		.catch((error: FirebaseError) => {
			if (error.code === ERROR_MESSAGE.USER_NOT_FOUND) {
				loginError = LOGIN_ERROR_MESSAGE[ERROR_MESSAGE.USER_NOT_FOUND];
			}

			if (error.code === ERROR_MESSAGE.WRONG_PASSWORD) {
				loginError = LOGIN_ERROR_MESSAGE[ERROR_MESSAGE.WRONG_PASSWORD];
			}
		});

	return loginError;
};

export const singOut = () => {
	signOut(auth)
		.then(() => {
			console.warn('User signed out');
		})
		.catch((error: FirebaseError) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.error({
				errorCode,
				errorMessage,
			});
		});
};
