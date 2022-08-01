import { FormEvent, useRef } from 'react';
import { useSearchContext } from '../context/SearchContext';

const SearchBar = () => {
	const { setQuery } = useSearchContext();
	const searchInput = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (searchInput.current) {
			setQuery(searchInput.current.value);
			searchInput.current.value = '';
		}
	};

	return (
		<form className="relative text-white" onSubmit={handleSubmit}>
			<i className="icon-search absolute left-4 top-2" aria-hidden="true" />
			<input
				ref={searchInput}
				type="search"
				placeholder="Search for a series, a movie, a genre, etc."
				className="w-full py-2 pr-4 pl-9 bg-netnet-grey text-smaller placeholder:text-white outline-none"
			/>
		</form>
	);
};

export default SearchBar;
