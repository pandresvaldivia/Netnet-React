import { GenresCarousel } from '@interfaces/catalog.interface';
import { GenreMoviesCarousel, PopularMoviesCarousel } from '@molecules';

const Catalog = ({ carousels }: CatalogProps) => {
	return (
		<section aria-label="Netnet Catalog" className="flex flex-col gap-4">
			<PopularMoviesCarousel />
			{carousels.map((genre) => {
				return <GenreMoviesCarousel key={genre.id} genre={genre} />;
			})}
		</section>
	);
};

type CatalogProps = {
	carousels: GenresCarousel[];
};

export default Catalog;
