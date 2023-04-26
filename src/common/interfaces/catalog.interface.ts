import { CONTENT_TYPE } from '@constants/content.constant';
import { MOVIES_GENRE, SERIES_GENRE } from '@constants/genres.constant';

export interface GenresCarousel {
	id: MOVIES_GENRE | SERIES_GENRE;
	title: string;
	type: CONTENT_TYPE;
}
