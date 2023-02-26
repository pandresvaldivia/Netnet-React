import HeroGenres from '@components/atoms/HeroGenres';
import { getRandomIndex } from '@helpers/array.helper';
import { createStoredTitle } from '@helpers/title.helper';
import useFetch from '@hooks/useFetch';
import { MovieResponse } from '@interfaces/movie.interface';
import { CatalogApi } from 'src/api/v3/catalog.api';

import HeroActions from './HeroActions';

const HeroCategory = () => {
	const { data, isLoading, error } = useFetch<MovieResponse>(CatalogApi.mostPopularMovies());

	if (isLoading) return null;

	if (error || !data?.results) return <p>Something went wrong</p>;

	const movieIndex = getRandomIndex(data.results);
	const movie = data.results[movieIndex];
	const { backdrop_path: poster, title, genre_ids, id } = movie;

	const actionTitle = createStoredTitle(movie);

	return (
		<div className="relative mb-12 h-96 w-screen">
			<img
				className="h-full w-full object-cover"
				src={`https://image.tmdb.org/t/p/original/${poster}`}
			/>
			<section
				aria-label="Matrix Reload details"
				className="flex flex-col items-center absolute bottom-0 w-full hero-details"
			>
				<h2 className="text-white font-semibold text-subtitle bg-black/60 px-2 rounded backdrop-blur-sm">
					{title}
				</h2>
				<HeroGenres genres={genre_ids} />
				<HeroActions title={actionTitle} link={`/title/${id}`} />
			</section>
		</div>
	);
};

export default HeroCategory;
