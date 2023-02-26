import { Icon } from '@components/icons/icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

const ActionButton = ({ text, icon, className, textClasses, onClick }: ActionButtonProps) => {
	return (
		<button
			className={classNames(className, 'flex flex-col gap-1 items-center text-white')}
			onClick={onClick}
		>
			<IconWrapper icon={icon} height="1.5rem" width="1.5rem" className="h-6 w-6" />
			<span className={classNames(textClasses, 'text-tiny font-semibold')}>{text}</span>
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
