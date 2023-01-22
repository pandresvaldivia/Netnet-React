import { Icon } from '@components/icons/icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

const TitleButton = ({ text, icon, className }: TitleButtonProps) => {
	return (
		<button
			className={classNames(
				className,
				'flex justify-center gap-1 text-regular-1 font-semibold py-1 rounded-sm w-full'
			)}
		>
			{icon && <IconWrapper icon={icon} className="h-[1.7em]" />}
			<span>{text}</span>
		</button>
	);
};

type TitleButtonProps = {
	text: string;
	className?: string;
	icon?: Icon;
};

export default TitleButton;
