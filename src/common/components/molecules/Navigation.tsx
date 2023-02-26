import { NavigationItem } from '@atoms';

const Navigation = () => {
	return (
		<nav className="grid grid-cols-4 fixed bottom-0 w-full bg-black">
			<NavigationItem text="Home" link="/browse" icon="icon-home" />
			<NavigationItem text="Comming soon" link="/comming-soon" icon="icon-cinema" />
			<NavigationItem text="Search" link="/search" icon="icon-search" />
			<NavigationItem text="Downloads" link="/downloads" icon="icon-dowload" />
		</nav>
	);
};

export default Navigation;
