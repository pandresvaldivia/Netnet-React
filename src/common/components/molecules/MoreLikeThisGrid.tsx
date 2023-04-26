import { RecommendationApi } from '@api/v3/recommendation.api';
import { MovieCard } from '@atoms';
import { CONTENT_TYPE } from '@constants/content.constant';
import useFetch from '@hooks/useFetch';
import { Recommendation } from '@interfaces/recommendation.interface';

const MoreLikeThisGrid = ({ id, type }: MoreLikeThisGrid) => {
	const { data, isLoading, error } = useFetch<Recommendation>(
		RecommendationApi.getSimilarMovies(id, type)
	);

	if (isLoading) return <p>Loading...</p>;

	if (error || !data) return <p>Something went wrong</p>;

	const recommendations = data.results.slice(0, 12);

	return (
		<div className="grid grid-cols-3 gap-2">
			{recommendations.map((recommendation) => {
				const { title, poster_path, id: movieId } = recommendation;

				return (
					<MovieCard
						key={movieId}
						id={movieId}
						title={title}
						poster={poster_path}
						className="!w-full rounded-md"
						type={type}
					/>
				);
			})}
		</div>
	);
};

type MoreLikeThisGrid = {
	id: number;
	type: CONTENT_TYPE;
};

export default MoreLikeThisGrid;
