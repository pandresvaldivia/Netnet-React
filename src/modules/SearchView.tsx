import SearchBar from './Search/components/SearchBar';
import SearchResults from './Search/components/SearchResults';
import SearchProvider from './Search/context/SearchContext';

const SearchView = () => {
	return (
		<SearchProvider>
			<SearchBar />
			<SearchResults />
		</SearchProvider>
	);
};

export default SearchView;
