import HeroGenres from '@components/atoms/HeroGenres';
import { CategoryHeroTitle } from '@interfaces/category.interface';

import HeroActions from './HeroActions';

const HeroCategory = ({ title }: HeroCategoryProps) => {
	const { genres, id, poster, name } = title;

	const actionTitle = {
		id,
		name,
		poster,
	};

	return (
		<div className="relative mb-12 h-96 w-screen">
			<img
				className="h-full w-full object-cover"
				src={`https://image.tmdb.org/t/p/original/${poster}`}
			/>
			<section
				aria-label="Matrix Reload details"
				className="flex flex-col items-center absolute bottom-0 w-full hero-details"
			>
				<h2 className="text-white font-semibold text-subtitle bg-black/60 px-2 rounded backdrop-blur-sm">
					{name}
				</h2>
				<HeroGenres genres={genres} />
				<HeroActions title={actionTitle} link={`/title/${id}`} />
			</section>
		</div>
	);
};

type HeroCategoryProps = {
	title: CategoryHeroTitle;
};

export default HeroCategory;
