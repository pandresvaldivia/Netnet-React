import TrailerPlayer from 'src/common/templates/TrailerPlayer';

import { useTitleContext } from '../contexts/Title.context';

const Trailer = () => {
	const { id, backdrop_path, title } = useTitleContext();

	return <TrailerPlayer id={id} poster={backdrop_path} name={title} />;
};

export default Trailer;
