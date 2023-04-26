import { GenresCarousel } from '@interfaces/catalog.interface';

import { CONTENT_TYPE } from './content.constant';
import { MOVIES_GENRE, SERIES_GENRE } from './genres.constant';

export const GENRE_CAROUSELS: GenresCarousel[] = [
	{
		id: MOVIES_GENRE.COMEDY,
		title: 'Comedy movies',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: SERIES_GENRE.MISTERY,
		title: 'Mistery series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: MOVIES_GENRE.ACTION,
		title: 'Action movies',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: SERIES_GENRE.DRAMA,
		title: 'Drama series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: MOVIES_GENRE.HORROR,
		title: 'Horror movies',
		type: CONTENT_TYPE.MOVIE,
	},
];

export const MOVIE_CAROUSELS: GenresCarousel[] = [
	{
		id: MOVIES_GENRE.ANIMATION,
		title: 'Animation',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: MOVIES_GENRE.ADVENTURE,
		title: 'Adventure',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: MOVIES_GENRE.CRIME,
		title: 'Crime',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: MOVIES_GENRE.COMEDY,
		title: 'Comedy',
		type: CONTENT_TYPE.MOVIE,
	},
	{
		id: MOVIES_GENRE.DRAMA,
		title: 'Action movies',
		type: CONTENT_TYPE.MOVIE,
	},
];

export const SERIES_CAROUSELS: GenresCarousel[] = [
	{
		id: SERIES_GENRE.COMEDY,
		title: 'Comedy series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: SERIES_GENRE.MISTERY,
		title: 'Mistery series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: SERIES_GENRE.DOCUMENTARY,
		title: 'Documentary series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: SERIES_GENRE.DRAMA,
		title: 'Drama series',
		type: CONTENT_TYPE.SERIES,
	},
	{
		id: SERIES_GENRE.REALITY,
		title: 'Reality shows',
		type: CONTENT_TYPE.SERIES,
	},
];
