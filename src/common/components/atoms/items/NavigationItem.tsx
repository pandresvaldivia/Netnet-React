import { NavLink } from 'react-router-dom';

const NavigationItem = ({ text, icon, link }: NavigationItemProps) => {
	return (
		<NavLink to={link} className={({ isActive }) => (isActive ? 'text-white' : 'text-netnet-grey')}>
			<span className="flex flex-col items-center py-3">
				<i aria-hidden="true" className={`text-2xl ${icon}`} />
				<span className="text-tiny">{text}</span>
			</span>
		</NavLink>
	);
};
type NavigationItemProps = {
	text: string;
	icon: string;
	link: string;
};

export default NavigationItem;
