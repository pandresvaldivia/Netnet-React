const ActionSkeleton = () => {
	return (
		<div className="flex flex-col items-center gap-1">
			<div className="h-6 aspect-square rounded bg-netnet-skeleton-200" />
			<div className="h-3.5 w-9 rounded bg-netnet-skeleton-200" />
		</div>
	);
};

export default ActionSkeleton;
