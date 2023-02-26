import { GENRE_CAROUSELS } from '@constants/carousel.constant';
import { Catalog, Hero } from '@organisms';

const HomeView = () => {
	return (
		<div className="relative pb-2">
			<Hero />
			<Catalog carousels={GENRE_CAROUSELS} />
		</div>
	);
};

export default HomeView;
