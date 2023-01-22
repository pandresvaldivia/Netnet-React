import { memo, ReactNode, SVGAttributes } from 'react';
import { Icon } from '@components/icons/icon';
import classNames from 'classnames';

const IconWrapper = ({ className, color = 'currentColor', icon, ...rest }: IconWrapperProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={icon?.vb}
			className={classNames(className)}
			fill={color}
			{...rest}
		>
			{icon && (icon.code as ReactNode)}
		</svg>
	);
};

interface IconProps {
	color?: string;
	className?: string;
	icon: Icon | null;
}

type IconWrapperProps = SVGAttributes<SVGElement> & IconProps;

export default memo(IconWrapper);
