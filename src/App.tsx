import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './common/components/molecules/Menu';
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
	return (
		<>
			<main className="pb-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</main>
			<Menu />
		</>
	);
};

export default App;
