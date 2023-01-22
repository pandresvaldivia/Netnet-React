import { GenreMoviesCarousel, PopularMoviesCarousel } from '@molecules';

import { GENRE_CAROUSELS } from '../../constants/carousel.constant';

const Catalog = () => {
	return (
		<section aria-label="Netnet Catalog" className="flex flex-col gap-4">
			<PopularMoviesCarousel />
			{GENRE_CAROUSELS.map((genre) => {
				return <GenreMoviesCarousel key={genre.id} genre={genre} />;
			})}
		</section>
	);
};

export default Catalog;
