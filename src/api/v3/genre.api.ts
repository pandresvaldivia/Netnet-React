import GenreService from 'src/services/v3/genre.service';

const service = new GenreService();

export const GenreApi = {
	getMovieGenres: () => service.getMovieGenres(),
} as const;
