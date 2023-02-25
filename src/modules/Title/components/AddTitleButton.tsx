import { ActionButton } from '@atoms';
import { check } from '@components/icons/C_icon';
import { plus } from '@components/icons/P_icon';

import useToggleTitle from '../hooks/useToggleTitle';

const AddTitleButton = () => {
	const { titleAdded, toggleTitle } = useToggleTitle();

	return <ActionButton text="My list" icon={titleAdded ? check : plus} onClick={toggleTitle} />;
};

export default AddTitleButton;
