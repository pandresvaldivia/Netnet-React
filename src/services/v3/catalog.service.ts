import { CONTENT_TYPE } from '@constants/content.constant';
import { MOVIES_GENRE, SERIES_GENRE } from '@constants/genres.constant';

import { CATALOG_ENDPOINTS } from '../constants/catalog.constant';
import HttpsRequest from '../https-request.service';
export default class CatalogService extends HttpsRequest {
	getSeriesMoviesByGenre(type: CONTENT_TYPE, genreId: SERIES_GENRE | MOVIES_GENRE) {
		this.configRequest({
			endpoint: `${CATALOG_ENDPOINTS.TV_MOVIES}/${type}`,
			params: `&with_genres=${genreId}`,
		});
		return this.urlBuilder();
	}

	getMostPopularMovies() {
		this.configRequest({ endpoint: CATALOG_ENDPOINTS.MOST_POPULAR_MOVIES, params: '' });
		return this.urlBuilder();
	}

	getMostPopularSeries() {
		this.configRequest({ endpoint: CATALOG_ENDPOINTS.MOST_POPULAR_SERIES, params: '' });
		return this.urlBuilder();
	}
}
