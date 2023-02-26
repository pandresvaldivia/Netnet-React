import { AuthProvider } from '@providers';

import AppRouter from './router/AppRouter';

const App = () => {
	return (
		<>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</>
	);
};

export default App;
