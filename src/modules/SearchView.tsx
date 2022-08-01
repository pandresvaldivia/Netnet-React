import { useEffect, useState } from 'react';
import { isArrayEmpty } from '../common/helpers/array.helper';
import SearchBar from './Search/components/SearchBar';
import SearchResults from './Search/components/SearchResults';
import SearchProvider from './Search/context/SearchContext';
import useGetSearchResults from './Search/hooks/useGetSearchResults';

const SearchView = () => {
	return (
		<SearchProvider>
			<SearchBar />
			<SearchResults />
		</SearchProvider>
	);
};

export default SearchView;
