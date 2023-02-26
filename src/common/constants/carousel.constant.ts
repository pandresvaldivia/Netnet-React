import { CONTENT_TYPE } from './content.constant';
import { GenresId } from './genres.constant';

export const GENRE_CAROUSELS: GenresCarousel[] = [
	{
		id: GenresId.COMEDY,
		title: 'Comedy movies',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: GenresId.MISTERY,
		title: 'Mistery series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: GenresId.ACTION,
		title: 'Action movies',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: GenresId.DRAMA,
		title: 'Drama series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: GenresId.HORROR,
		title: 'Horror movies',
		type: CONTENT_TYPE.MOVIE,
	},
];

export interface GenresCarousel {
	id: GenresId;
	title: string;
	type: CONTENT_TYPE;
}
