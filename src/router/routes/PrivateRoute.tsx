import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../common/contexts/Auth.context';

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { isAuthenticated } = useAuthContext();

	if (!isAuthenticated) return <Navigate to="/" />;

	return children;
};

type PrivateRouteProps = {
	children: JSX.Element;
};

export default PrivateRoute;
