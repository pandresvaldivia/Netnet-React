import useGetCatalogByGenre from '../../hooks/useGetMovieByGenre';
import MovieCarousel from '../../templates/MovieCarousel';
import SeriesCarousel from '../../templates/SeriesCarousel';
import CourselSkeleton from '../atoms/CourselSkeleton';

const GenreCatalogCarousel = ({
	genre,
	type = 'movie',
}: GenreMoviesCarouselProps) => {
	const { movies, isLoading } = useGetCatalogByGenre(genre, type);

	if (isLoading) return <CourselSkeleton />;

	return (
		<>
			{type !== 'tv' && <MovieCarousel title={genre} movies={movies} />}
			{type === 'tv' && <SeriesCarousel title={genre} series={movies} />}
		</>
	);
};

type GenreMoviesCarouselProps = {
	genre: string;
	type?: 'movie' | 'tv';
};

export default GenreCatalogCarousel;
