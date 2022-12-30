import CatalogService from '../../services/v3/catalog.service';

const service = new CatalogService();

export const CatalogApi = {
	mostPopularMovies: service.mostPopularMovies,
} as const;
