import MovieCard from '../components/atoms/MovieCard';
import { Movie } from '../interfaces/movie.interface';

const MovieCarousel = ({ movies, title }: MovieCarouselProps) => {
	return (
		<section aria-label={title}>
			<h2 className="text-subtitle font-bold text-white mb-2 px-4">{title} movies</h2>
			<div className="flex gap-2 overflow-auto px-4">
				{movies.map((movie) => {
					const { title: movieTitle, poster_path, id } = movie;

					return <MovieCard key={id} title={movieTitle} poster={poster_path} />;
				})}
			</div>
		</section>
	);
};

type MovieCarouselProps = {
	movies: Movie[];
	title: string;
};

export default MovieCarousel;
