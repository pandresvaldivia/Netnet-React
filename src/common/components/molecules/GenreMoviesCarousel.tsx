import { CatalogApi } from '@api/v3/catalog.api';
import { CourselSkeleton } from '@atoms';
import useFetch from '@hooks/useFetch';
import { GenresCarousel } from '@interfaces/catalog.interface';
import { CatalogResponse } from '@interfaces/movie.interface';
import { MovieCarousel } from '@templates';

const GenreCatalogCarousel = ({ genre }: GenreMoviesCarouselProps) => {
	const { id, title, type } = genre;
	const { data, isLoading, error } = useFetch<CatalogResponse>(
		CatalogApi.seriesMoviesByGenre(type, id)
	);

	if (isLoading) return <CourselSkeleton />;

	if (error || !data) return <p>Something went wrong</p>;

	const catalog = data.results;

	return <MovieCarousel title={title} movies={catalog} type={type} />;
};

type GenreMoviesCarouselProps = {
	genre: GenresCarousel;
};

export default GenreCatalogCarousel;
