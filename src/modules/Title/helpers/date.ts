export const getYear = (date: Date) => new Date(date).getFullYear();

export const minutesToHours = (minutes: number) => {
	const hours = Math.floor(minutes / 60);
	const minutesLeft = minutes % 60;

	return `${hours}h ${minutesLeft}m`;
};
