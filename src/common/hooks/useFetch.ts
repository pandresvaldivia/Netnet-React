import { useEffect, useReducer, useRef } from 'react';
import { Cache, State } from '@interfaces/fetch.interface';

import { FetchState } from '../constants/fetch.constant';
import { fetchReducer } from '../reducers/fetch.reducer';

const useFetch = <T = unknown>(url?: string): State<T> => {
	const cache = useRef<Cache<T>>({});
	const cancelRequest = useRef<boolean>(false);

	const initialState: State<T> = {
		data: undefined,
		error: undefined,
		isLoading: false,
	};

	const [state, dispatch] = useReducer(fetchReducer<T>, initialState);

	useEffect(() => {
		if (!url) return;

		cancelRequest.current = false;

		if (cache.current[url]) {
			dispatch({ type: FetchState.FETCHED, payload: cache.current[url] });
			return;
		}

		const fetchData = async () => {
			dispatch({ type: FetchState.LOADING });

			try {
				const res = await fetch(url);

				if (!res.ok) {
					throw new Error(res.statusText);
				}

				const data = await (res.json() as T);
				cache.current[url] = data;

				if (cancelRequest.current) return;

				dispatch({ type: FetchState.FETCHED, payload: data });
			} catch (error) {
				cancelRequest.current = true;
				dispatch({ type: FetchState.ERROR, payload: error as Error });
			}
		};

		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [url]);

	return state;
};

export default useFetch;
