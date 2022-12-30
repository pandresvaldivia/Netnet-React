import { CarouselType } from '../../common/constants/carousel.constant';
import { GenresId } from '../../common/constants/genres.constant';
import CatalogService from '../../services/v3/catalog.service';

const service = new CatalogService();

export const CatalogApi = {
	mostPopularMovies: () => service.getMostPopularMovies(),
	seriesMoviesByGenre: (type: CarouselType, genreId: GenresId) =>
		service.getSeriesMoviesByGenre(type, genreId),
} as const;
