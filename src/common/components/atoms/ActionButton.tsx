import { Icon } from '@components/icons/icon';
import IconWrapper from 'src/common/templates/IconWrapper';

const ActionButton = ({ text, icon, className, onClick }: ActionButtonProps) => {
	return (
		<button
			className={`${className} flex flex-col gap-1 items-center text-white`}
			onClick={onClick}
		>
			<IconWrapper icon={icon} height="1.5rem" width="1.5rem" className="h-6 w-6" />
			<span className="text-tiny font-semibold">{text}</span>
		</button>
	);
};

type ActionButtonProps = {
	text: string;
	icon: Icon;
	className?: string;
	onClick?: () => void;
};

export default ActionButton;
