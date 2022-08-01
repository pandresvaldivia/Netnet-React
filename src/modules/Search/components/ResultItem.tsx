const ResultItem = ({ title, poster }: ResultItemProps) => {
	return (
		<li className="flex text-white">
			<img
				className="h-16 aspect-video"
				src={`https://image.tmdb.org/t/p/original${poster}`}
				alt={`${title} poster`}
				height="64"
				width="113.78"
			/>
			<div className="flex items-center justify-between px-2.5 flex-1 bg-netnet-dark">
				<span className="text-sm">{title}</span>
				<button className="border border-current rounded-full h-6 aspect-square">
					<i className="icon-play" aria-hidden="true" />
				</button>
			</div>
		</li>
	);
};

type ResultItemProps = {
	title: string;
	poster: string;
};

export default ResultItem;
