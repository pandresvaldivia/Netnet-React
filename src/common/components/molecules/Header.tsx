import UserMenu from './UserMenu';

const Header = () => {
	const handleBack = () => {
		window.history.back();
	};

	return (
		<header className="flex justify-between p-4 pr-2 bg-black sticky top-0 z-1">
			<button className="text-white" onClick={handleBack}>
				<i className="icon-back text-2xl align-middle" />
			</button>
			<UserMenu />
		</header>
	);
};

export default Header;
