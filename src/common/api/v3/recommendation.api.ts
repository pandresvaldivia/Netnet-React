import { CONTENT_TYPE } from '@constants/content.constant';
import RecommendationService from 'src/services/v3/recommendation.service';

const service = new RecommendationService();

export const RecommendationApi = {
	getSimilarMovies: (id: string | number, type: CONTENT_TYPE) => service.getSimilarMovies(id, type),
} as const;
