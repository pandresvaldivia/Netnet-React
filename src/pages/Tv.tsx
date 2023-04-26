import TvProvider from '@modules/Tv/contexts/Tv.context';
import TvView from '@modules/Tv/TvView';

const Tv = () => {
	return (
		<TvProvider>
			<TvView />
		</TvProvider>
	);
};

export default Tv;
