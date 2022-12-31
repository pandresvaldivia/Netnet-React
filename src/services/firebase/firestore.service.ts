import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './firebase.config';

const app = initializeApp(firebaseConfig);

export const bd = getFirestore();

const auth = getAuth(app);

export default auth;
