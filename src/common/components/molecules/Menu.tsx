import MenuItem from '../atoms/MenuItem';

const Menu = () => {
	return (
		<nav className="grid grid-cols-4 fixed bottom-0 w-full bg-black">
			<MenuItem text="Inicio" icon="icon-home" />
			<MenuItem text="Próximamente" icon="icon-cinema" />
			<MenuItem text="Buscar" icon="icon-search" />
			<MenuItem text="Descargas" icon="icon-download" />
		</nav>
	);
};

export default Menu;
