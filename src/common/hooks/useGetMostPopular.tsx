import { useEffect, useState } from 'react';

const key = import.meta.env.VITE_API_KEY;

const useGetMostPopular = () => {
	const [data, setData] = useState({
		movies: [],
		isLoading: true,
	});

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=${key}`
			);

			const mostPopularMovies = await response.json();

			setData({
				movies: mostPopularMovies.results,
				isLoading: false,
			});
		})();
	}, []);

	return data;
};

export default useGetMostPopular;
