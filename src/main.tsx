import React from 'react';
import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { firebaseConfig } from './services/firebase';
import App from './App';

import './styles/index.scss';

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
