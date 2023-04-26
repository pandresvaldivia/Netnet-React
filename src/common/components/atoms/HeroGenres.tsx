import { GenreApi } from '@api/v3/genre.api';
import { getGenresDetails, getGenresText } from '@helpers/genre.helper';
import useFetch from '@hooks/useFetch';
import { TitleGenres } from '@interfaces/genre.interface';

const HeroGenres = ({ genres }: HeroGenresProps) => {
	const { data, isLoading, error } = useFetch<TitleGenres>(GenreApi.getMovieGenres());

	if (isLoading) return null;

	if (error || !data) return <p>Something went wrong</p>;

	const titleGenres = getGenresDetails(genres, data.genres);

	return <p className="text-tiny my-3 text-white">{getGenresText(titleGenres)}</p>;
};

type HeroGenresProps = {
	genres: number[];
};

export default HeroGenres;
