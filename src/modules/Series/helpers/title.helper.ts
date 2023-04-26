import { CategoryHeroTitle } from '@interfaces/category.interface';
import { Series } from '@interfaces/series.interface';

export const getSeriesHeroTitle = (series: Series[]): CategoryHeroTitle => {
	const { id, name, backdrop_path, genre_ids } = series[0];

	return {
		id,
		name,
		poster: backdrop_path,
		genres: genre_ids,
	};
};
