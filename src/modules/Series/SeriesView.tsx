import { SERIES_CAROUSELS } from '@constants/carousel.constant';
import { PopularSeriesCarousel } from '@molecules';
import { Catalog } from '@organisms';

import SeriesHero from './components/SeriesHero';

const SeriesView = () => {
	return (
		<main>
			<SeriesHero />
			<Catalog carousels={SERIES_CAROUSELS}>
				<PopularSeriesCarousel />
			</Catalog>
		</main>
	);
};

export default SeriesView;
