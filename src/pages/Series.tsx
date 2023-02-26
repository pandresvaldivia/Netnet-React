import SeriesProvider from '@modules/Series/contexts/Series.context';
import SeriesView from '@modules/Series/SeriesView';

const Series = () => {
	return (
		<SeriesProvider>
			<SeriesView />
		</SeriesProvider>
	);
};

export default Series;
