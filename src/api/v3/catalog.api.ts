import { CONTENT_TYPE } from '@constants/content.constant';

import { GenresId } from '../../common/constants/genres.constant';
import CatalogService from '../../services/v3/catalog.service';

const service = new CatalogService();

export const CatalogApi = {
	mostPopularMovies: () => service.getMostPopularMovies(),
	seriesMoviesByGenre: (type: CONTENT_TYPE, genreId: GenresId) =>
		service.getSeriesMoviesByGenre(type, genreId),
} as const;
