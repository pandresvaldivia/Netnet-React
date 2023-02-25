import { Cast } from '../interfaces/team.interface';

export const getTeamList = (list: Cast[], isTruncate: boolean) => {
	return list
		.slice(0, isTruncate ? 4 : 7)
		.map((member) => member.name)
		.join(', ');
};
