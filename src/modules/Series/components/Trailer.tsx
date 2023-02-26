import { CONTENT_TYPE } from '@constants/content.constant';
import TrailerPlayer from 'src/common/templates/TrailerPlayer';

import { useSeriesContext } from '../contexts/Series.context';

const Trailer = () => {
	const { id, backdrop_path, name } = useSeriesContext();

	return <TrailerPlayer id={id} poster={backdrop_path} name={name} type={CONTENT_TYPE.SERIES} />;
};

export default Trailer;
