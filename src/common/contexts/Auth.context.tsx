import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import auth from '../../services/firebase/firestore.service';

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const currentPath = useLocation().pathname;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setIsLoading(false);

			if (user) {
				setIsAuthenticated(true);
				navigate(currentPath, {
					replace: true,
				});
			} else {
				setIsAuthenticated(false);
			}
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);

type AuthProviderProps = {
	children: JSX.Element;
};

type AuthContextProps = {
	isAuthenticated: boolean;
	isLoading: boolean;
};

export default AuthProvider;
