import MovieCard from '../components/atoms/MovieCard';
import { Series } from '../interfaces/series.interface';

const SeriesCarousel = ({ series, title }: SeriesCarouselProps) => {
	return (
		<section aria-label={title}>
			<h2 className="text-subtitle font-bold text-white mb-2 px-4">{title} series</h2>
			<div className="flex gap-2 overflow-auto px-4">
				{series.map((serie) => {
					const { name, poster_path, id } = serie;

					return <MovieCard key={id} title={name} poster={poster_path} />;
				})}
			</div>
		</section>
	);
};

type SeriesCarouselProps = {
	series: Series[];
	title: string;
};

export default SeriesCarousel;
