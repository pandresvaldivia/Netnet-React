import HeaderMenuItem from '../atoms/HeaderMenuItem';

const HeaderMenu = () => {
	return (
		<nav className="flex gap-12 justify-center">
			<HeaderMenuItem text="Series" link="/series" />
			<HeaderMenuItem text="Movies" link="/movies" />
			<HeaderMenuItem text="My list" link="/my-list" />
		</nav>
	);
};

export default HeaderMenu;
