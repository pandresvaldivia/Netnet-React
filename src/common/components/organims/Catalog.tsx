import GenreCatalogCarousel from '../molecules/GenreMoviesCarousel';
import PopularMoviesCarousel from '../molecules/PopularMoviesCarousel';

const Catalog = () => {
	return (
		<section aria-label="Netnet Catalog" className="flex flex-col gap-4">
			<PopularMoviesCarousel />
			<GenreCatalogCarousel genre="Comedy" />
			<GenreCatalogCarousel genre="Mystery" type="tv" />
			<GenreCatalogCarousel genre="Action" />
			<GenreCatalogCarousel genre="Drama" type="tv" />
			<GenreCatalogCarousel genre="Horror" />
		</section>
	);
};

export default Catalog;
