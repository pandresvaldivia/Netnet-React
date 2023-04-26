import { GenresCarousel } from '@interfaces/catalog.interface';
import { GenreMoviesCarousel } from '@molecules';

const Catalog = ({ carousels, children }: CatalogProps) => {
	return (
		<section aria-label="Netnet Catalog" className="flex flex-col gap-4">
			{children}
			{carousels.map((genre) => {
				return <GenreMoviesCarousel key={genre.id} genre={genre} />;
			})}
		</section>
	);
};

type CatalogProps = {
	children?: JSX.Element;
	carousels: GenresCarousel[];
};

export default Catalog;
