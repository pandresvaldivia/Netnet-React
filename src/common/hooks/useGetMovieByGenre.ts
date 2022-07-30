import { useEffect, useState } from 'react';
import { getGenreByName } from '../helpers/getGenreById.helper';

const KEY = import.meta.env.VITE_API_KEY;

const useGetCatalogByGenre = (genre: string, type = 'movie') => {
	const [data, setData] = useState({
		movies: [],
		isLoading: true,
	});

	useEffect(() => {
		(async () => {
			const genreId = await getGenreByName(genre, type);

			const response = await fetch(
				`https://api.themoviedb.org/3/discover/${type}?api_key=${KEY}&with_genres=${genreId}`
			);

			const data = await response.json();

			setData({
				movies: data.results,
				isLoading: false,
			});
		})();
	}, []);

	return data;
};

export default useGetCatalogByGenre;
