import { AddTitleButton, Button, LinkButton } from '@atoms';
import { info } from '@components/icons/I_icon';

import { Title } from '../../../services/interfaces/storage';

const HeroActions = ({ title, link }: HeroActionsProps) => {
	return (
		<div className="flex items-center justify-between w-80 mx-auto">
			<AddTitleButton title={title} />
			<Button text="Play" icon="icon-play" />
			<LinkButton text="Info" icon={info} link={link} />
		</div>
	);
};

type HeroActionsProps = {
	title: Title;
	link: string;
};

export default HeroActions;
