import { CONTENT_TYPE } from '@constants/content.constant';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, poster, id, className, type }: MovieCardProps) => {
	const cardLink = type === CONTENT_TYPE.SERIES ? `/tv/${id}?` : `/title/${id}`;

	return (
		<article
			className={classNames(
				className,
				'aspect-poster w-24 rounded-sm overflow-hidden flex-shrink-0'
			)}
		>
			<Link to={cardLink}>
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
	className?: string;
	type?: CONTENT_TYPE;
};

export default MovieCard;
