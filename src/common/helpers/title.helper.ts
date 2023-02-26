import { CONTENT_TYPE } from '@constants/content.constant';
import { Movie, Series } from '@interfaces/movie.interface';
import { Title } from 'src/services/interfaces/storage';

export const createStoredTitle = (title: Movie | Series, type = CONTENT_TYPE.MOVIE): Title => {
	if (type === CONTENT_TYPE.MOVIE) {
		return {
			id: title.id,
			name: title.title,
			poster: title.poster_path,
		};
	}

	return {
		id: title.id,
		name: title.name,
		poster: title.poster_path,
	};
};
