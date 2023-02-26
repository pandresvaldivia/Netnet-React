import { Header, HomeHeader, Navigation as Menu } from '@molecules';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'src/pages/Home';
import Search from 'src/pages/Search';
import Series from 'src/pages/Series';
import Title from 'src/pages/Title';

const NetnetRoutes = () => {
	const location = useLocation();
	const isInHome = location.pathname === '/browse';

	return (
		<>
			{isInHome && <HomeHeader />}
			{!isInHome && <Header />}
			<main className="pb-16">
				<Routes>
					<Route path="/browse" element={<Home />} />
					<Route path="/search" element={<Search />} />
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
