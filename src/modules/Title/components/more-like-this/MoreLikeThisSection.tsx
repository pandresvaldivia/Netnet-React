import MoreLikeThisGrid from './MoreLikeThisGrid';

const MoreLikeThisSection = () => {
	return (
		<section className="relative py-4 px-4 before:absolute before:top-0 before:block before:h-1 before:w-28 before:bg-netnet-red">
			<h3 className="text-subtitle font-bold mb-2">More like this</h3>
			<MoreLikeThisGrid />
		</section>
	);
};

export default MoreLikeThisSection;
