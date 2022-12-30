import { MovieResponse } from '@interfaces/movie.interface';

import { CatalogApi } from '../../../api/v3/catalog.api';
import useFetch from '../../hooks/useFetch';
import MovieCarousel from '../../templates/MovieCarousel';
import CourselSkeleton from '../atoms/CourselSkeleton';

const PopularMoviesCarousel = () => {
	const { data, isLoading, error } = useFetch<MovieResponse>(CatalogApi.mostPopularMovies);

	if (isLoading) return <CourselSkeleton />;

	if (error || !data?.results) return <p>Something went wrong</p>;

	const movies = data.results;

	return <MovieCarousel title="Popular on Netnet" movies={movies} />;
};

export default PopularMoviesCarousel;
