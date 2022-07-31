import HomeHeader from '../common/components/molecules/HomeHeader';
import Catalog from '../common/components/organims/Catalog';
import Hero from '../common/components/organims/Hero';

const HomeView = () => {
	return (
		<div className="relative pb-2">
			<HomeHeader />
			<Hero />
			<Catalog />
		</div>
	);
};

export default HomeView;
