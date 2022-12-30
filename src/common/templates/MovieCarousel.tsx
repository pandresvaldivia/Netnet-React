import MovieCard from '../components/atoms/MovieCard';
import { CarouselType } from '../constants/carousel.constant';
import { Movie, Series } from '../interfaces/movie.interface';

const MovieCarousel = ({ movies, title, type = CarouselType.MOVIE }: MovieCarouselProps) => {
	return (
		<section aria-label={title}>
			<h2 className="text-subtitle font-bold text-white mb-2 px-4">{title}</h2>
			<div className="flex gap-2 overflow-auto px-4">
				{movies.map((movie) => {
					const { poster_path, id } = movie;
					const itemTitle = type === CarouselType.MOVIE ? movie.title : movie.name;

					return <MovieCard key={id} title={itemTitle} poster={poster_path} />;
				})}
			</div>
		</section>
	);
};

type MovieCarouselProps = {
	movies: Movie[] | Series[];
	title: string;
	type?: CarouselType;
};

export default MovieCarousel;
