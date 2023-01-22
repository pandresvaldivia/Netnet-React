import { Link } from 'react-router-dom';

const HeaderMenuItem = ({ text, link }: HeaderMenuItemProps) => {
	return (
		<Link to={link}>
			<span className="text-white text-sm">{text}</span>
		</Link>
	);
};

type HeaderMenuItemProps = {
	text: string;
	link: string;
};

export default HeaderMenuItem;
