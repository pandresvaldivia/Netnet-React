import ActionButtons from './components/ActionButtons';
import Details from './components/Details';
import MoreLikeThisSection from './components/more-like-this/MoreLikeThisSection';
import TitleButtons from './components/TitleButtons';
import TitleTeam from './components/TitleTeam';
import Trailer from './components/Trailer';
import { useTitleContext } from './contexts/Title.context';

const TitleView = () => {
	const { title, overview } = useTitleContext();

	return (
		<main className="text-white">
			<Trailer />
			<section className="px-4 py-4 mb-6">
				<h1 className="text-headline-1 font-bold mb-2">{title}</h1>
				<Details />
				<TitleButtons />
				<p className="text-regular-1 mb-4">{overview}</p>
				<TitleTeam />
				<ActionButtons />
			</section>
			<MoreLikeThisSection />
		</main>
	);
};

export default TitleView;
