import { CatalogApi } from '@api/v3/catalog.api';
import { CourselSkeleton } from '@atoms';
import useFetch from '@hooks/useFetch';
import { SeriesResponse } from '@interfaces/series.interface';
import { MovieCarousel } from '@templates';

const PopularSeriesCarousel = () => {
	const { data, isLoading, error } = useFetch<SeriesResponse>(CatalogApi.mostPopularSeries());

	if (isLoading) return <CourselSkeleton />;

	if (error || !data?.results) return <p>Something went wrong</p>;

	const series = data.results;

	return <MovieCarousel title="Popular on Netnet" movies={series} />;
};

export default PopularSeriesCarousel;
