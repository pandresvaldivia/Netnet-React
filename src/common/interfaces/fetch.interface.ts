import { FetchState } from '@constants/fetch.constant';

export interface State<T> {
	data?: T;
	isLoading: boolean;
	error?: Error;
}

export interface Cache<T> {
	[url: string]: T;
}

export type Action<T> =
	| { type: FetchState.LOADING }
	| { type: FetchState.FETCHED; payload: T }
	| { type: FetchState.ERROR; payload: Error };
