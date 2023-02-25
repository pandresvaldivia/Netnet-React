import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { netnetDB } from 'src/services/storage/storage';

import { useTitleContext } from '../contexts/Title.context';

const useToggleTitle = () => {
	const { title, backdrop_path, id } = useTitleContext();
	const [titleAdded, setTitleAdded] = useState(false);

	useLiveQuery(async () => {
		const currentTitle = await netnetDB.titles.get(id);

		if (currentTitle) {
			setTitleAdded(true);
		}

		return currentTitle;
	});

	async function addTitle() {
		try {
			await netnetDB.titles.add({
				id,
				name: title,
				poster: backdrop_path,
			});

			setTitleAdded(true);
		} catch (error) {
			console.error(error);
		}
	}

	const toggleTitle = () => {
		if (!titleAdded) {
			addTitle();
			return;
		}

		setTitleAdded(false);
		netnetDB.titles.delete(id);
	};

	return {
		toggleTitle,
		titleAdded,
	};
};

export default useToggleTitle;
