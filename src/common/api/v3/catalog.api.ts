import { CONTENT_TYPE } from '@constants/content.constant';
import { MOVIES_GENRE, SERIES_GENRE } from '@constants/genres.constant';

import CatalogService from '../../../services/v3/catalog.service';

const service = new CatalogService();

export const CatalogApi = {
	mostPopularMovies: () => service.getMostPopularMovies(),
	mostPopularSeries: () => service.getMostPopularSeries(),
	seriesMoviesByGenre: (type: CONTENT_TYPE, genreId: SERIES_GENRE | MOVIES_GENRE) =>
		service.getSeriesMoviesByGenre(type, genreId),
} as const;
