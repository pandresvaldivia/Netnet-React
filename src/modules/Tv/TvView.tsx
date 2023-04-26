import { CONTENT_TYPE } from '@constants/content.constant';
import TitleButtons from '@modules/Title/components/TitleButtons';
import TitleTeam from '@modules/Title/components/TitleTeam';
import { ActionButtons } from '@molecules';
import { MoreLikeThisSection } from '@organisms';

import Trailer from './components/Trailer';
import { useTvContext } from './contexts/Tv.context';

const TvView = () => {
	const { name, overview, poster_path, id } = useTvContext();

	const seriesTitle = {
		id,
		name,
		poster: poster_path,
	};

	return (
		<main className="text-white">
			<Trailer />
			<section className="px-4 py-4 mb-6">
				<h1 className="text-headline-1 font-bold mb-2">{name}</h1>
				<TitleButtons />
				<p className="text-regular-1 mb-4">{overview}</p>
				<TitleTeam id={id} type={CONTENT_TYPE.SERIES} />
				<ActionButtons title={seriesTitle} />
			</section>
			<MoreLikeThisSection id={id} type={CONTENT_TYPE.SERIES} />
		</main>
	);
};

export default TvView;
