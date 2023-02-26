import { HERO_TITLE } from '@modules/Home/constants/hero.constant';

import HeroActions from './HeroActions';

const HeroDetails = ({ image, alt, tags }: HeroDetailsProps) => {
	return (
		<section
			aria-label="Matrix Reload details"
			className="flex flex-col items-center absolute bottom-0 w-full hero-details"
		>
			<img src={image} alt={alt} height="64" width="312" />
			<p className="text-tiny my-3 text-white">{tags}</p>
			<HeroActions title={HERO_TITLE} link="/title/604" />
		</section>
	);
};

type HeroDetailsProps = {
	image: string;
	alt: string;
	tags: string;
};

export default HeroDetails;
