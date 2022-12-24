import { State } from '../interfaces/api.interface';

export const fetchReducer = <T = unknown>(
	state: State<T>,

	action: Action<T>
): State<T> => {
	switch (key) {
		case value:
			break;

		default:
			break;
	}
};

type Action<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error };
