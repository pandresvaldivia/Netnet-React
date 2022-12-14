import Catalog from '../common/components/organims/Catalog';
import Hero from '../common/components/organims/Hero';

const HomeView = () => {
	return (
		<div className="relative pb-2">
			<Hero />
			<Catalog />
		</div>
	);
};

export default HomeView;
