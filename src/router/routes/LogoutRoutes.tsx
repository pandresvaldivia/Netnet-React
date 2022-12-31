import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../../pages/Login';
import Singup from '../../pages/Singup';

const LogoutRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Singup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default LogoutRoutes;
