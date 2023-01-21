import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import auth from '../firebase/firestore.service';

export const registerUser = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.warn(`User ${userCredential.user} created`);
		})
		.catch((error) => {
			console.error(error);
		});
};

export const LogIn = (email: string, password: string) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.warn(`User ${userCredential.user} logged in`);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			console.error({
				errorCode,
				errorMessage,
			});
		});
};

export const singOut = () => {
	signOut(auth)
		.then(() => {
			console.warn('User signed out');
		})
		.catch((error) => {
			console.error(error);
		});
};
