import { CONTENT_TYPE } from '@constants/content.constant';
import { PopularCarouselTitle } from '@interfaces/carousel.interface';
import { Title } from 'src/services/interfaces/storage';

export const createStoredTitle = (
	title: PopularCarouselTitle,
	type = CONTENT_TYPE.MOVIE
): Title => {
	const { id, name = '', title: movieName = '', poster_path } = title;

	if (type === CONTENT_TYPE.MOVIE) {
		return {
			id,
			name: movieName,
			poster: poster_path,
		};
	}

	return {
		id,
		name,
		poster: poster_path,
	};
};
