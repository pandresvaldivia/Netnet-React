import { ActionButton, Button } from '@atoms';

const HeroActions = () => {
	return (
		<div className="flex items-center justify-between w-80 mx-auto">
			<ActionButton text="My list" icon="icon-plus" />
			<Button text="Play" icon="icon-play" />
			<ActionButton text="Info" icon="icon-info" />
		</div>
	);
};

export default HeroActions;
