import { CourselSkeleton } from '@atoms';
import { GenresCarousel } from '@interfaces/catalog.interface';

import { CatalogApi } from '../../../api/v3/catalog.api';
import useFetch from '../../hooks/useFetch';
import { CatalogResponse } from '../../interfaces/movie.interface';
import MovieCarousel from '../../templates/MovieCarousel';

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
