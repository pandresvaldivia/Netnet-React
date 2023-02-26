import { Genre } from '@interfaces/genre.interface';

export const getGenresDetails = (ids: number[], genres: Genre[]) => {
	const genresDetails = genres.filter((genre) => ids.includes(genre.id));

	return genresDetails;
};

export const getGenresText = (genres: Genre[]) => genres.map((genre) => genre.name).join(' • ');
