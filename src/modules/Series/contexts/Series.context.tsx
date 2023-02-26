import { createContext, ReactNode, useContext } from 'react';
import useFetch from '@hooks/useFetch';
import { TvSeries } from '@interfaces/tv-title.interface';
import { Navigate, useParams } from 'react-router-dom';

const KEY = import.meta.env.VITE_API_KEY;

const SeriesContext = createContext({} as TvSeries);

const SeriesProvider = ({ children }: SeriesProviderProvider) => {
	const id = useParams().id as string;

	const { data, isLoading, error } = useFetch<TvSeries>(
		`https://api.themoviedb.org/3/tv/${id}?api_key=${KEY}&language=en-US`
	);

	if (isLoading) return null;

	if (error || !data) return <Navigate to="/" />;

	return <SeriesContext.Provider value={data}>{children}</SeriesContext.Provider>;
};

type SeriesProviderProvider = {
	children: ReactNode;
};

export const useSeriesContext = () => useContext(SeriesContext);

export default SeriesProvider;
