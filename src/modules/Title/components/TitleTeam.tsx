import { CONTENT_TYPE } from '@constants/content.constant';
import useFetch from '@hooks/useFetch';

import { Team } from '../interfaces/team.interface';

import TitleTeamList from './TitleTeamList';

const KEY = import.meta.env.VITE_API_KEY;

const TitleTeam = ({ id, type = CONTENT_TYPE.MOVIE }: TitleTeamProps) => {
	const { data, isLoading, error } = useFetch<Team>(
		`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${KEY}&language=en-US`
	);

	if (!data || isLoading || error) return null;

	return (
		<div className="flex flex-col gap-1 mb-6">
			<TitleTeamList title="Cast" cast={data.cast} />
			<TitleTeamList title="Director" cast={data.crew} />
		</div>
	);
};

type TitleTeamProps = {
	id: number;
	type?: CONTENT_TYPE;
};

export default TitleTeam;
