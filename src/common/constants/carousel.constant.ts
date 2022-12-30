import { GenresId } from './genres.constant';

export enum CarouselType {
	MOVIE = 'movie',
	SERIES = 'tv',
}

export const GENRE_CAROUSELS: GenresCarousel[] = [
	{
		id: GenresId.COMEDY,
		title: 'Comedy movies',
		type: CarouselType.MOVIE,
	},
	{
		id: GenresId.MISTERY,
		title: 'Mistery series',
		type: CarouselType.MOVIE,
	},
	{
		id: GenresId.ACTION,
		title: 'Action movies',
		type: CarouselType.MOVIE,
	},
	{
		id: GenresId.DRAMA,
		title: 'Drama series',
		type: CarouselType.MOVIE,
	},
	{
		id: GenresId.HORROR,
		title: 'Horror movies',
		type: CarouselType.MOVIE,
	},
];

export interface GenresCarousel {
	id: GenresId;
	title: string;
	type: CarouselType;
}
