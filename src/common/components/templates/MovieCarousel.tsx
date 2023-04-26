import { MovieCard } from '@atoms';
import { CONTENT_TYPE } from '@constants/content.constant';
import { PopularCarouselTitle } from '@interfaces/carousel.interface';

const MovieCarousel = ({ movies, title, type = CONTENT_TYPE.MOVIE }: MovieCarouselProps) => {
	return (
		<section aria-label={title}>
			<h2 className="text-subtitle font-bold text-white mb-2 px-4">{title}</h2>
			<div className="flex gap-2 overflow-auto px-4">
				{movies.map((movie) => {
					const { poster_path, id } = movie;
					const itemTitle = type === CONTENT_TYPE.MOVIE ? movie.title : movie.name;

					return <MovieCard key={id} title={itemTitle} poster={poster_path} id={id} type={type} />;
				})}
			</div>
		</section>
	);
};

type MovieCarouselProps = {
	movies: PopularCarouselTitle[];
	title: string;
	type?: CONTENT_TYPE;
};

export default MovieCarousel;
