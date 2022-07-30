import { useEffect, useState } from 'react';

const useGetMostPopular = () => {
	const [data, setData] = useState({
		movies: [],
		isLoading: true,
	});
	const key = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=${key}`
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

export default useGetMostPopular;
