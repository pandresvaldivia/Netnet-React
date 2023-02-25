import { createContext, ReactNode, useContext } from 'react';
import useFetch from '@hooks/useFetch';
import { MovieTitle } from '@interfaces/movie-title.interface';
import { useParams } from 'react-router-dom';

const KEY = import.meta.env.VITE_API_KEY;

const TitleContext = createContext({} as MovieTitle);

const TitleProvider = ({ children }: TitleProviderProvider) => {
	const id = useParams().id as string;

	const { data, isLoading, error } = useFetch<MovieTitle>(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
	);

	if (!data || isLoading || error) return null;

	return <TitleContext.Provider value={data}>{children}</TitleContext.Provider>;
};

type TitleProviderProvider = {
	children: ReactNode;
};

export const useTitleContext = () => useContext(TitleContext);

export default TitleProvider;
