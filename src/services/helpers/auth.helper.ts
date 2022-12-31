import { createUserWithEmailAndPassword } from 'firebase/auth';

import auth from '../firebase/firestore.service';

export const registerUser = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			console.error(error);
		});
};
