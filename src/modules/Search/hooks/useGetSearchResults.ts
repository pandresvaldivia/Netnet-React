import { useEffect, useState } from 'react';
import { getValidResults } from '../helpers/results.helper';

const KEY = import.meta.env.VITE_API_KEY;

const useGetSearchResults = (query: string) => {
	const [results, setResults] = useState({
		results: [],
		isLoading: false,
	});

	useEffect(() => {
		if (query === '') return;

		setResults({ results: [], isLoading: true });

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=1&query=${query}`
		)
			.then((res) => res.json())
			.then((data) => {
				const movies = getValidResults(data.results);
				console.log(movies);
				setResults({ results: movies as never, isLoading: false });
			});
	}, [query]);

	return results;
};

export default useGetSearchResults;
