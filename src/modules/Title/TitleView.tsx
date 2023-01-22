import useFetch from '@hooks/useFetch';
import { MovieTitle } from '@interfaces/movie-title.interface';
import { MovieTrailer } from '@interfaces/movie-trailer';
import { useParams } from 'react-router-dom';

import Details from './components/Details';
import TitleButtons from './components/TitleButtons';
import Trailer from './components/Trailer';

const TitleView = () => {
	const id = useParams().id as string;

	const { data, isLoading, error } = useFetch<MovieTitle>(
		`https://api.themoviedb.org/3/movie/${id}?api_key=ab595fcfafda6a6164c98c7c7cfb1784&language=en-US`
	);

	if (!data) return null;

	const { backdrop_path, title, overview } = data;

	return (
		<main className="text-white">
			<Trailer id={id} poster={backdrop_path} />
			<section className="px-4 py-4">
				<h1 className="text-headline-1 font-bold mb-2">{title}</h1>
				<Details data={data} />
				<TitleButtons />
				<p className="text-regular-1">{overview}</p>
			</section>
		</main>
	);
};

export default TitleView;
