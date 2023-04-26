import { MOVIE_CAROUSELS } from '@constants/carousel.constant';
import { PopularMoviesCarousel } from '@molecules';
import { Catalog } from '@organisms';

import MoviesHero from './components/MoviesHero';

const MoviesView = () => {
	return (
		<main>
			<MoviesHero />
			<Catalog carousels={MOVIE_CAROUSELS}>
				<PopularMoviesCarousel />
			</Catalog>
		</main>
	);
};

export default MoviesView;
