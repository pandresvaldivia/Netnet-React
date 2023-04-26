import { createContext, ReactNode, useContext } from 'react';
import useFetch from '@hooks/useFetch';
import { TvSeries } from '@interfaces/tv-title.interface';
import { Navigate, useParams } from 'react-router-dom';

const KEY = import.meta.env.VITE_API_KEY;

const TvContext = createContext({} as TvSeries);

const TvProvider = ({ children }: TvProviderProvider) => {
	const id = useParams().id as string;

	const { data, isLoading, error } = useFetch<TvSeries>(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${KEY}&language=en-US`
	);

	if (isLoading) return null;

	if (error || !data) return <Navigate to="/" />;

	return <TvContext.Provider value={data}>{children}</TvContext.Provider>;
};

type TvProviderProvider = {
	children: ReactNode;
};

export const useTvContext = () => useContext(TvContext);

export default TvProvider;
