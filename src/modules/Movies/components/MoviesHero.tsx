import { CatalogApi } from '@api/v3/catalog.api';
import useFetch from '@hooks/useFetch';
import { MovieResponse } from '@interfaces/movie.interface';
import { HeroCategory, HeroSkeleton } from '@molecules';

import { getMovieHeroTitle } from '../helpers/title.helper';

const MoviesHero = () => {
	const { data, isLoading, error } = useFetch<MovieResponse>(CatalogApi.mostPopularMovies());

	if (!data || isLoading || error) return <HeroSkeleton />;

	const movieTitle = getMovieHeroTitle(data.results);

	return <HeroCategory title={movieTitle} />;
};

export default MoviesHero;
