import AuthProvider from './common/contexts/Auth.context';
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
