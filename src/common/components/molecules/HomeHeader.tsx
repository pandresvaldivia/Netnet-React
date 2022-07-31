import { Link } from 'react-router-dom';
import Avatar from '../atoms/Avatar';
import HeaderMenu from './HeaderMenu';

const HomeHeader = () => {
	return (
		<div className="header absolute top-0 z-1 h-48 w-full">
			<header className="p-4">
				<div className="flex items-center justify-between mb-6">
					<Link to="/">
						<img src="/images/logo/logo.png" alt="netnet logo" />
					</Link>
					<Avatar />
				</div>
				<HeaderMenu />
			</header>
		</div>
	);
};

export default HomeHeader;
