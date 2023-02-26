import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Title } from 'src/services/interfaces/storage';
import { netnetDB } from 'src/services/storage/storage';

const useAddTitle = (title: Title) => {
	const { id } = title;
	const [isAdded, setIsAdded] = useState(false);

	useLiveQuery(async () => {
		const currentTitle = await netnetDB.titles.get(id);

		if (currentTitle) {
			setIsAdded(true);
		}

		return currentTitle;
	});

	async function addTitle() {
		try {
			await netnetDB.titles.add(title);

			setIsAdded(true);
		} catch (error) {
			console.error(error);
		}
	}

	const toggleTitle = () => {
		if (!isAdded) {
			addTitle();
			return;
		}

		setIsAdded(false);
		netnetDB.titles.delete(id);
	};

	return {
		toggleTitle,
		isAdded,
	};
};

export default useAddTitle;
