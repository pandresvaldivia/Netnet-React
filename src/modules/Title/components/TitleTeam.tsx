import useFetch from '@hooks/useFetch';

import { useTitleContext } from '../contexts/Title.context';
import { Team } from '../interfaces/team.interface';

import TitleTeamList from './TitleTeamList';

const KEY = import.meta.env.VITE_API_KEY;

const TitleTeam = () => {
	const { id } = useTitleContext();

	const { data, isLoading, error } = useFetch<Team>(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
	);

	if (!data || isLoading || error) return null;

	return (
		<div className="flex flex-col gap-1 mb-6">
			<TitleTeamList title="Cast" cast={data.cast} />
			<TitleTeamList title="Director" cast={data.crew} />
		</div>
	);
};

export default TitleTeam;
