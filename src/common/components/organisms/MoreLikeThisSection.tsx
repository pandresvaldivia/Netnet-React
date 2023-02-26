import { CONTENT_TYPE } from '@constants/content.constant';
import { MoreLikeThisGrid } from '@molecules';

const MoreLikeThisSection = ({ id, type = CONTENT_TYPE.MOVIE }: MoreLikeThisSectionProps) => {
	return (
		<section className="relative py-4 px-4 before:absolute before:top-0 before:block before:h-1 before:w-28 before:bg-netnet-red">
			<h3 className="text-subtitle font-bold mb-2">More like this</h3>
			<MoreLikeThisGrid id={id} type={type} />
		</section>
	);
};

type MoreLikeThisSectionProps = {
	id: number;
	type?: CONTENT_TYPE;
};

export default MoreLikeThisSection;
