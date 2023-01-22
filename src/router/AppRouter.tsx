import { Loader } from '@atoms';
import { Route, Routes } from 'react-router-dom';

import { useAuthContext } from '../common/contexts/Auth.context';

import LogoutRoutes from './routes/LogoutRoutes';
import NetnetRoutes from './routes/NetnetRoutes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const AppRouter = () => {
	const { isAuthenticated, isLoading } = useAuthContext();

	if (isLoading) return <Loader />;

	return (
		<Routes>
			{isAuthenticated && (
				<Route
					path="/*"
					element={
						<PrivateRoute>
							<NetnetRoutes />
						</PrivateRoute>
					}
				/>
			)}
			{!isAuthenticated && (
				<Route
					path="/*"
					element={
						<PublicRoute>
							<LogoutRoutes />
						</PublicRoute>
					}
				/>
			)}
		</Routes>
	);
};

export default AppRouter;
