import { useEffect, useState } from 'react';
import { State } from '@interfaces/fetch.interface';
import { TitleResponse } from '@interfaces/title.interface';

const useCategoryBanner = (request: State<TitleResponse>) => {
	const [data, setData] = useState<BannerTitle | undefined>(undefined);
	const { data: requestData, isLoading, error } = request;

	useEffect(() => {
		if (!requestData || error) return;

		const { results } = requestData;
		const randomIndex = Math.floor(Math.random() * results.length);
		const randomBanner = results[randomIndex];
		const name = randomBanner.title || randomBanner.name;

		setData({
			id: randomBanner.id,
			poster: randomBanner.backdrop_path,
			name,
			genres: randomBanner.genre_ids,
		});
	}, [data]);

	return {
		data,
		isLoading,
	};
};

interface BannerTitle {
	id: number;
	poster: string;
	name?: string;
	genres: number[];
}

export default useCategoryBanner;
