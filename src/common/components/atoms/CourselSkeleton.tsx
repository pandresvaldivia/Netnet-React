const CourselSkeleton = () => {
	return (
		<div>
			<div className="h-6 w-28 skeleton mb-2 mx-4 rounded-sm" />
			<div className="flex gap-2 overflow-auto px-4">
				<div className="aspect-poster skeleton rounded-sm w-24 flex-shrink-0" />
				<div className="aspect-poster skeleton rounded-sm w-24 flex-shrink-0" />
				<div className="aspect-poster skeleton rounded-sm w-24 flex-shrink-0" />
				<div className="aspect-poster skeleton rounded-sm w-24 flex-shrink-0" />
				<div className="aspect-poster skeleton rounded-sm w-24 flex-shrink-0" />
			</div>
		</div>
	);
};

export default CourselSkeleton;
