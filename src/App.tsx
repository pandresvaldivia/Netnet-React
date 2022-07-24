import Main from './components/main';

const App = () => {
	const path = import.meta.env.VITE_BASE_URL;

	return <Main url={path} />;
};

export default App;
