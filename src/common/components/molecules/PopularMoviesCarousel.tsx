import useGetMostPopular from '../../hooks/useGetMostPopular';
import MovieCarousel from '../../templates/MovieCarousel';
import CourselSkeleton from '../atoms/CourselSkeleton';

const PopularMoviesCarousel = () => {
	const { movies, isLoading } = useGetMostPopular();

	if (isLoading) return <CourselSkeleton />;

	return <MovieCarousel title="Popular on Netnet" movies={movies} />;
};

export default PopularMoviesCarousel;
