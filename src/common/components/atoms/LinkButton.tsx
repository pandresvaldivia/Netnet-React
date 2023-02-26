import { Icon } from '@components/icons/icon';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import IconWrapper from 'src/common/templates/IconWrapper';

import ButtonStyles from '@styles/components/atoms/button.module.scss';

const LinkButton = ({ text, icon, className, textClasses, link }: LinkButtonProps) => {
	return (
		<Link to={link} className={classNames(ButtonStyles.root, className)}>
			<IconWrapper
				icon={icon}
				height="1.5rem"
				width="1.5rem"
				className={classNames(ButtonStyles.icon)}
			/>
			<span className={classNames(ButtonStyles.text, textClasses)}>{text}</span>
		</Link>
	);
};

type LinkButtonProps = {
	text: string;
	icon: Icon;
	className?: string;
	textClasses?: string;
	link: string;
};

export default LinkButton;
