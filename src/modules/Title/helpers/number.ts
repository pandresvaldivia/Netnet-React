export const getRatingPercentage = (rating: number) => {
	return `${(rating * 10).toFixed(0)}%`;
};
