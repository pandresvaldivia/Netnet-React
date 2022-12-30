import { GENRE_CAROUSELS } from '../../constants/carousel.constant';
import GenreCatalogCarousel from '../molecules/GenreMoviesCarousel';
import PopularMoviesCarousel from '../molecules/PopularMoviesCarousel';

const Catalog = () => {
	return (
		<section aria-label="Netnet Catalog" className="flex flex-col gap-4">
			<PopularMoviesCarousel />
			{GENRE_CAROUSELS.map((genre) => {
				return <GenreCatalogCarousel key={genre.id} genre={genre} />;
			})}
		</section>
	);
};

export default Catalog;
