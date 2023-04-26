import { CatalogApi } from '@api/v3/catalog.api';
import useFetch from '@hooks/useFetch';
import { SeriesResponse } from '@interfaces/series.interface';
import { HeroCategory, HeroSkeleton } from '@molecules';

import { getSeriesHeroTitle } from '../helpers/title.helper';

const SeriesHero = () => {
	const { data, isLoading, error } = useFetch<SeriesResponse>(CatalogApi.mostPopularSeries());

	if (!data || isLoading || error) return <HeroSkeleton />;

	const seriesTitle = getSeriesHeroTitle(data.results);

	return <HeroCategory title={seriesTitle} />;
};

export default SeriesHero;
