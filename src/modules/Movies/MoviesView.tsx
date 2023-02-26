import HeroCategory from '@components/molecules/HeroCategory';
import { MOVIE_CAROUSELS } from '@constants/carousel.constant';
import { Catalog } from '@organisms';

const MoviesView = () => {
	return (
		<main>
			<HeroCategory />
			<Catalog carousels={MOVIE_CAROUSELS} />
		</main>
	);
};

export default MoviesView;
