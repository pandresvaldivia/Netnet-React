import HttpsRequest from '../https-request.service';

enum CatalogEndpoints {
	MOST_POPULAR = 'movie/popular',
}

export default class CatalogService extends HttpsRequest {
	get mostPopularMovies() {
		this.configRequest({ endpoint: CatalogEndpoints.MOST_POPULAR });
		return this.urlBuilder();
	}
}
