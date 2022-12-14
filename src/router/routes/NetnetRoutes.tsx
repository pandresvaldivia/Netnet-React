import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from '../../common/components/molecules/Header';
import HomeHeader from '../../common/components/molecules/HomeHeader';
import Menu from '../../common/components/molecules/Navigation';
import Home from '../../pages/Home';
import Search from '../../pages/Search';

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
					<Route path="/*" element={<Navigate to="/browse" />} />
				</Routes>
			</main>
			<Menu />
		</>
	);
};

export default NetnetRoutes;
