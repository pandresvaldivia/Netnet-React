import { ActionButton } from '@atoms';
import { send } from '@components/icons/S_icon';

import { useShareContext } from '../contexts/Share.context';

const ShareButton = () => {
	const { setIsOpen } = useShareContext();

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	return <ActionButton text="Share" icon={send} onClick={handleOpenModal} />;
};

export default ShareButton;
