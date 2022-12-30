import { Movie } from '@interfaces/movie.interface';

import useFetch from '../../hooks/useFetch';
import MovieCarousel from '../../templates/MovieCarousel';
import CourselSkeleton from '../atoms/CourselSkeleton';

const key = import.meta.env.VITE_API_KEY;

const PopularMoviesCarousel = () => {
	const { data, isLoading, error } = useFetch<Movie[]>(
		`https://api.themoviedb.org/3/movie/popular?api_key=${key}`
	);

	if (isLoading) return <CourselSkeleton />;

	if (error || !data) return <p>Something went wrong</p>;

	const movies = data.results;

	return <MovieCarousel title="Popular on Netnet" movies={movies} />;
};

export default PopularMoviesCarousel;
