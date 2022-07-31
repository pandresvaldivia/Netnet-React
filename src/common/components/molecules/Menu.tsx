import MenuItem from '../atoms/MenuItem';

const Menu = () => {
	return (
		<nav className="grid grid-cols-4 fixed bottom-0 w-full bg-black">
			<MenuItem text="Inicio" link="/" icon="icon-home" />
			<MenuItem text="Próximamente" link="/comming-soon" icon="icon-cinema" />
			<MenuItem text="Buscar" link="/search" icon="icon-search" />
			<MenuItem text="Descargas" link="/downloads" icon="icon-dowload" />
		</nav>
	);
};

export default Menu;
