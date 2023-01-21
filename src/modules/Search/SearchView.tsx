import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SearchProvider from './context/SearchContext';

const SearchView = () => {
	return (
		<SearchProvider>
			<SearchBar />
			<SearchResults />
		</SearchProvider>
	);
};

export default SearchView;
