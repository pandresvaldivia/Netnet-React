import { MovieResult } from '../../../common/interfaces/search.interface';
import ResultItem from './ResultItem';

const SearchResultsList = ({ results }: SearchResultsListProps) => {
	return (
		<ul className="search-results__list flex flex-col gap-0.5 overflow-auto">
			{results.map((result: MovieResult) => {
				const { id, title, backdrop_path } = result;

				return <ResultItem key={id} title={title} poster={backdrop_path} />;
			})}
		</ul>
	);
};

type SearchResultsListProps = {
	results: MovieResult[];
};

export default SearchResultsList;
