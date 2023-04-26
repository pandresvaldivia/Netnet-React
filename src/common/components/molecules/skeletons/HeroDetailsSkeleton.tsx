import { ActionSkeleton, ButtonSkeleton } from '@atoms';

const HeroDetailsSkeleton = () => {
	return (
		<div className="flex flex-col items-center absolute bottom-0 w-full hero-details">
			<div className="bg-netnet-skeleton-200 h-6 w-20 px-2 rounded mb-3" />
			<div className="bg-netnet-skeleton-200 h-3.5 w-8 rounded mb-3" />
			<div className="flex items-center justify-between w-80">
				<ActionSkeleton />
				<ButtonSkeleton />
				<ActionSkeleton />
			</div>
		</div>
	);
};

export default HeroDetailsSkeleton;
