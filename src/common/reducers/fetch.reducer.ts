import { Action, State } from '@interfaces/fetch.interface';

import { FetchState } from '../constants/fetch.constant';

export const fetchReducer = <T = unknown>(state: State<T>, action: Action<T>): State<T> => {
	switch (action.type) {
		case FetchState.LOADING:
			return { ...state, isLoading: true };
		case FetchState.FETCHED:
			return { ...state, data: action.payload, isLoading: false };
		case FetchState.ERROR:
			return { ...state, error: action.payload, isLoading: false };
		default:
			return state;
	}
};
