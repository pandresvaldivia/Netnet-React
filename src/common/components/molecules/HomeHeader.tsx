import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import UserMenu from './UserMenu';

const HomeHeader = () => {
	return (
		<div className="header absolute top-0 z-1 h-48 w-full">
			<header className="p-4">
				<div className="flex items-center justify-between mb-6">
					<Link to="/browse">
						<img src="/images/logo/logo.svg" alt="netnet logo" />
					</Link>
					<UserMenu />
				</div>
				<HeaderMenu />
			</header>
		</div>
	);
};

export default HomeHeader;
