import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './common/components/molecules/Menu';
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
			<Menu />
		</main>
	);
};

export default App;
