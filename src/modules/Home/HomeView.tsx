import { Catalog, Hero } from '@organisms';

const HomeView = () => {
	return (
		<div className="relative pb-2">
			<Hero />
			<Catalog />
		</div>
	);
};

export default HomeView;
