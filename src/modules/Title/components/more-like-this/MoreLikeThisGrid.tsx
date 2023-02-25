import { MovieCard } from '@atoms';
import useFetch from '@hooks/useFetch';
import { Recommendation } from '@interfaces/recommendation.interface';
import { useTitleContext } from '@modules/Title/contexts/Title.context';
import { RecommendationApi } from 'src/api/v3/recommendation.api';

const MoreLikeThisGrid = () => {
	const { id } = useTitleContext();

	const { data, isLoading, error } = useFetch<Recommendation>(
		RecommendationApi.getSimilarMovies(id)
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
						className="w-full rounded-md"
					/>
				);
			})}
		</div>
	);
};

export default MoreLikeThisGrid;
