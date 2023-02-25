import { ActionButton, Button } from '@atoms';
import { info } from '@components/icons/I_icon';
import { plus } from '@components/icons/P_icon';

const HeroActions = () => {
	return (
		<div className="flex items-center justify-between w-80 mx-auto">
			<ActionButton text="My list" icon={plus} />
			<Button text="Play" icon="icon-play" />
			<ActionButton text="Info" icon={info} />
		</div>
	);
};

export default HeroActions;
