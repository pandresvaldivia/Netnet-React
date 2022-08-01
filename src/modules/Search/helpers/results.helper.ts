import { MovieResult } from '../../../common/interfaces/search.interface';

export const getValidResults = (results: MovieResult[]): MovieResult[] => {
	return results.filter((result) => result.backdrop_path);
};
