import { CONTENT_TYPE } from '@constants/content.constant';
import { GenresId } from '@constants/genres.constant';

export interface GenresCarousel {
	id: GenresId;
	title: string;
	type: CONTENT_TYPE;
}
