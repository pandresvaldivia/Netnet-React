import HttpsRequest from '../https-request.service';

export default class RecommendationService extends HttpsRequest {
	getSimilarMovies(movieId: string | number) {
		const endpoint = `movie/${movieId}/recommendations`;
		this.configRequest({ endpoint });

		return this.urlBuilder();
	}
}
