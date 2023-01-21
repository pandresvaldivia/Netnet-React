import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const LogoutHeader = ({ className }: LogoutHeaderProps) => {
	const { pathname } = useLocation();
	const isInSignUp = pathname === '/';

	return (
		<header
			className={classNames(
				className,
				'flex items-center justify-between w-full text-white text-sm py-5 px-4'
			)}
		>
			<Link to="/">
				<img
					className="h-6 w-[5.25rem]"
					height="24"
					width="84"
					src="/images/logo/logo.svg"
					alt="netnet logo"
				/>
			</Link>
			{isInSignUp && (
				<Link to="/login" className="bg-netnet-red-100 px-2 py-1 rounded">
					Sign In
				</Link>
			)}
		</header>
	);
};

type LogoutHeaderProps = {
	className?: string;
};

export default LogoutHeader;
