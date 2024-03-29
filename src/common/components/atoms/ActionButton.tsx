import { Icon } from '@components/icons/icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

import ButtonStyles from '@styles/components/atoms/button.module.scss';

const ActionButton = ({ text, icon, className, textClasses, onClick }: ActionButtonProps) => {
	return (
		<button className={classNames(ButtonStyles.root, className)} onClick={onClick}>
			<IconWrapper
				icon={icon}
				height="1.5rem"
				width="1.5rem"
				className={classNames(ButtonStyles.icon)}
			/>
			<span className={classNames(ButtonStyles.text, textClasses)}>{text}</span>
		</button>
	);
};

type ActionButtonProps = {
	text: string;
	icon: Icon;
	className?: string;
	textClasses?: string;
	onClick?: () => void;
};

export default ActionButton;
