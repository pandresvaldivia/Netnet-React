const MovieCard = ({ title, poster }: MovieCardProps) => {
	return (
		<article className="aspect-poster w-24 rounded-sm overflow-hidden flex-shrink-0">
			<a href="#">
				<img
					className="align-middle w-full"
					src={`https://image.tmdb.org/t/p/original${poster}`}
					height="144"
					width="96"
					alt={title}
				/>
			</a>
		</article>
	);
};

type MovieCardProps = {
	title: string;
	poster: string;
};

export default MovieCard;
