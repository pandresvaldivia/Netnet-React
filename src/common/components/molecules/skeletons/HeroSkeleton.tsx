import HeroDetailsSkeleton from './HeroDetailsSkeleton';

const HeroSkeleton = () => {
	return (
		<div className="relative mb-12 h-96 w-screen skeleton">
			<HeroDetailsSkeleton />
		</div>
	);
};

export default HeroSkeleton;
