import HttpsRequest from '../https-request.service';

const enum GENRE_ENDPOINT {
	MOVIE = 'genre/movie/list',
}

export default class GenreService extends HttpsRequest {
	getMovieGenres() {
		this.configRequest({ endpoint: GENRE_ENDPOINT.MOVIE });

		return this.urlBuilder();
	}
}
