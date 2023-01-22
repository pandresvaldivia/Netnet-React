import { download } from '@components/icons/D_icon';
import { play } from '@components/icons/P_icon';

import TitleButton from './TitleButton';

const TitleButtons = () => {
	return (
		<div className="flex flex-col gap-2 mb-4">
			<TitleButton className="bg-white text-black" text="Play" icon={play} />
			<TitleButton className="bg-netnet-grey-300 text-white" text="Download" icon={download} />
		</div>
	);
};

export default TitleButtons;
