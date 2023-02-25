import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { netnetDB } from 'src/services/storage/storage';

import { useTitleContext } from '../contexts/Title.context';

const useRateTitle = () => {
	const { id } = useTitleContext();
	const [isRated, setIsRated] = useState(false);

	useLiveQuery(async () => {
		const currentTitle = await netnetDB.rated.get(id);

		if (currentTitle) {
			setIsRated(true);
		}

		return currentTitle;
	});

	async function addRate() {
		try {
			await netnetDB.rated.add({
				id,
			});

			setIsRated(true);
		} catch (error) {
			console.error(error);
		}
	}

	const handleRate = () => {
		if (!isRated) {
			addRate();
			return;
		}

		setIsRated(false);
		netnetDB.rated.delete(id);
	};

	return {
		handleRate,
		isRated,
	};
};

export default useRateTitle;
