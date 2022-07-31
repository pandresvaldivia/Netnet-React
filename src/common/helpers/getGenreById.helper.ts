const KEY = import.meta.env.VITE_API_KEY;

export const getGenreByName = async (
	name: string,
	type: string
): Promise<string> => {
	const gendersUrl = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${KEY}`;

	try {
		const response = await fetch(gendersUrl);
		const data = await response.json();
		const genre = data.genres.find((item: Genre) => item.name === name);
		return genre ? genre.id : '';
	} catch (error) {
		console.log(error);
		return '';
	}
};

type Genre = {
	id: number;
	name: string;
};
