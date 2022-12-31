import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../common/contexts/Auth.context';

const PublicRoute = ({ children }: PublicRouteProps) => {
	const { isAuthenticated } = useAuthContext();

	if (isAuthenticated) return <Navigate to="/browse" />;

	return children;
};

type PublicRouteProps = {
	children: JSX.Element;
};

export default PublicRoute;
