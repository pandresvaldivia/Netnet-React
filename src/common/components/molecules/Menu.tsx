import MenuItem from '../atoms/MenuItem';

const Menu = () => {
	return (
		<nav className="grid grid-cols-4 fixed bottom-0 w-full bg-black">
			<MenuItem text="Home" link="/" icon="icon-home" />
			<MenuItem text="Comming soon" link="/comming-soon" icon="icon-cinema" />
			<MenuItem text="Search" link="/search" icon="icon-search" />
			<MenuItem text="Downloads" link="/downloads" icon="icon-dowload" />
		</nav>
	);
};

export default Menu;
