import { AddTitleButton, RateButton, ShareButton } from '@atoms';
import { ModalShare } from '@molecules';
import { ShareProvider } from '@providers';
import { Title } from 'src/services/interfaces/storage';

const ActionButtons = ({ title }: ActionButtonsProps) => {
	const { id } = title;

	return (
		<ShareProvider>
			<div className="flex gap-6">
				<AddTitleButton title={title} className="text-netnet-grey" />
				<RateButton id={id} />
				<ShareButton />
				<ModalShare />
			</div>
		</ShareProvider>
	);
};

type ActionButtonsProps = {
	title: Title;
};

export default ActionButtons;
