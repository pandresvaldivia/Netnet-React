import { CONTENT_TYPE } from '@constants/content.constant';

import { GenresId } from '../../common/constants/genres.constant';
import HttpsRequest from '../https-request.service';

enum CatalogEndpoints {
	MOST_POPULAR = 'movie/popular',
	TV_MOVIES = 'discover',
}

export default class CatalogService extends HttpsRequest {
	getMostPopularMovies() {
		this.configRequest({ endpoint: CatalogEndpoints.MOST_POPULAR });
		return this.urlBuilder();
	}

	getSeriesMoviesByGenre(type: CONTENT_TYPE, genreId: GenresId) {
		this.configRequest({
			endpoint: `${CatalogEndpoints.TV_MOVIES}/${type}`,
			params: `&with_genres=${genreId}`,
		});
		return this.urlBuilder();
	}
}
