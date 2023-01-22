import { Link } from 'react-router-dom';

const MovieCard = ({ title, poster, id }: MovieCardProps) => {
	return (
		<article className="aspect-poster w-24 rounded-sm overflow-hidden flex-shrink-0">
			<Link to={`/title/${id}`}>
				<img
					className="align-middle w-full"
					src={`https://image.tmdb.org/t/p/original${poster}`}
					height="144"
					width="96"
					loading="lazy"
					alt={title}
				/>
			</Link>
		</article>
	);
};

type MovieCardProps = {
	title: string;
	poster: string;
	id: number;
};

export default MovieCard;
