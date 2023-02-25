import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@components/icons/icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

const TitleButton = ({ text, icon, className, ...rest }: TitleButtonProps) => {
	return (
		<button
			className={classNames(
				className,
				'flex justify-center gap-1 text-regular-1 font-semibold py-1 rounded-sm w-full'
			)}
			{...rest}
		>
			{icon && <IconWrapper icon={icon} className="h-[1.7em]" />}
			<span>{text}</span>
		</button>
	);
};

type ButtonProps = {
	text: string;
	className?: string;
	icon?: Icon;
};

type TitleButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default TitleButton;
