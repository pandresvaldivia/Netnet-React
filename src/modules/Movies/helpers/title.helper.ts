import { CategoryHeroTitle } from '@interfaces/category.interface';
import { Movie } from '@interfaces/movie.interface';

export const getMovieHeroTitle = (movies: Movie[]): CategoryHeroTitle => {
	const { id, title, backdrop_path, genre_ids } = movies[0];

	return {
		id,
		name: title,
		poster: backdrop_path,
		genres: genre_ids,
	};
};
