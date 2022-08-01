import { isArrayEmpty } from '../../../common/helpers/array.helper';
import { useSearchContext } from '../context/SearchContext';
import SearchResultsList from './SearchResultsList';

const SearchResults = () => {
	const { query, results, isLoading } = useSearchContext();

	return (
		<section aria-label="Los mas buscados">
			{isLoading && <div className="text-white">Loading...</div>}
			{isArrayEmpty(results) && !isLoading && (
				<span className="text-white">Nada</span>
			)}
			{!isArrayEmpty(results) && !isLoading && (
				<>
					<h2 className="text-white text-subtitle font-bold px-4 py-3.5">
						{query} results:
					</h2>
					<SearchResultsList results={results} />
				</>
			)}
		</section>
	);
};

export default SearchResults;
