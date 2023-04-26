export const isArrayEmpty = (arr: (unknown | never)[]): boolean => {
	return arr.length === 0;
};

export const getRandomIndex = (arr?: unknown[]): number => {
	if (!arr) return 0;

	return Math.floor(Math.random() * arr.length);
};
