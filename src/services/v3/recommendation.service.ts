import { CONTENT_TYPE } from '@constants/content.constant';

import HttpsRequest from '../https-request.service';

const RECOMENDATION_ENDPOINT = {
	[CONTENT_TYPE.MOVIE]: 'recommendations',
	[CONTENT_TYPE.SERIES]: 'similar',
};

export default class RecommendationService extends HttpsRequest {
	getSimilarMovies(movieId: string | number, type: CONTENT_TYPE) {
		const endpoint = `${type}/${movieId}/${RECOMENDATION_ENDPOINT[type]}`;
		this.configRequest({ endpoint });

		return this.urlBuilder();
	}
}
