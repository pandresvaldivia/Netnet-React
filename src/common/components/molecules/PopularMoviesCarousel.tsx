import { CourselSkeleton } from '@atoms';

import { CatalogApi } from '../../../api/v3/catalog.api';
import useFetch from '../../hooks/useFetch';
import { MovieResponse } from '../../interfaces/movie.interface';
import MovieCarousel from '../../templates/MovieCarousel';

const PopularMoviesCarousel = () => {
	const { data, isLoading, error } = useFetch<MovieResponse>(CatalogApi.mostPopularMovies());

	if (isLoading) return <CourselSkeleton />;

	if (error || !data?.results) return <p>Something went wrong</p>;

	const movies = data.results;

	return <MovieCarousel title="Popular on Netnet" movies={movies} />;
};

export default PopularMoviesCarousel;
