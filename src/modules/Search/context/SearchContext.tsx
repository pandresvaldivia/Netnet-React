import { createContext, ReactNode, useContext, useState } from 'react';
import useGetSearchResults from '../hooks/useGetSearchResults';

const SearchContext = createContext({} as SearchContextProps);

const SearchProvider = ({ children }: SearchProviderProps) => {
	const [query, setQuery] = useState('');
	const { results, isLoading } = useGetSearchResults(query);

	return (
		<SearchContext.Provider value={{ query, setQuery, results, isLoading }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearchContext = () => useContext(SearchContext);

type SearchProviderProps = {
	children: ReactNode;
};

type SearchContextProps = {
	query: string;
	setQuery: (query: string) => void;
	results: any[];
	isLoading: boolean;
};

export default SearchProvider;
