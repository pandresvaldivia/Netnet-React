import { Header, HomeHeader, Navigation as Menu } from '@molecules';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'src/pages/Home';
import Movies from 'src/pages/Movies';
import Search from 'src/pages/Search';
import Series from 'src/pages/Series';
import Title from 'src/pages/Title';

const HEADER_PATHS = ['/browse', '/movies'];

const NetnetRoutes = () => {
	const location = useLocation();
	const hasMainHeader = HEADER_PATHS.includes(location.pathname);

	return (
		<>
			{hasMainHeader && <HomeHeader />}
			{!hasMainHeader && <Header />}
			<main className="pb-16">
				<Routes>
					<Route path="/browse" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/title/:id" element={<Title />} />
					<Route path="/tv/:id" element={<Series />} />
					<Route path="/*" element={<Navigate to="/browse" />} />
				</Routes>
			</main>
			<Menu />
		</>
	);
};

export default NetnetRoutes;
