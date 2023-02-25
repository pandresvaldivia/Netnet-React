import RecommendationService from 'src/services/v3/recommendation.service';

const service = new RecommendationService();

export const RecommendationApi = {
	getSimilarMovies: (id: string | number) => service.getSimilarMovies(id),
} as const;
