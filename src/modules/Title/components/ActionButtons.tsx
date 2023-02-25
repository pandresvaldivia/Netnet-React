import ModalShare from '@modules/Title/components/ModalShare';

import AddTitleButton from './AddTitleButton';
import RateButton from './RateButton';
import ShareButton from './ShareButton';

const ActionButtons = () => {
	return (
		<div className="flex gap-6">
			<ModalShare />
			<AddTitleButton />
			<RateButton />
			<ShareButton />
		</div>
	);
};

export default ActionButtons;
