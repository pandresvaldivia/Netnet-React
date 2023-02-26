import { ActionButton } from '@atoms';
import { check } from '@components/icons/C_icon';
import { plus } from '@components/icons/P_icon';
import useAddTitle from '@hooks/useAddTitle';
import { Title } from 'src/services/interfaces/storage';

const AddTitleButton = ({ title }: AddTitleButtonProps) => {
	const { isAdded, toggleTitle } = useAddTitle(title);

	return (
		<ActionButton
			text="My list"
			icon={isAdded ? check : plus}
			onClick={toggleTitle}
			textClasses="text-netnet-grey"
		/>
	);
};

type AddTitleButtonProps = {
	title: Title;
};

export default AddTitleButton;
