import { Link } from 'react-router-dom';

import LogoutHeader from '../../common/components/molecules/LogoutHeader';

import SingInForm from './components/SingInForm';

const LoginView = () => {
	return (
		<main>
			<LogoutHeader className="mb-3" />
			<section className="text-white px-4">
				<h1 className="text-3xl font-bold mb-7">Sign In</h1>
				<SingInForm />
				<p className="text-netnet-grey">
					New to Netnet?{' '}
					<Link to="/" className="text-white">
						Sing up now
					</Link>
					.
				</p>
			</section>
		</main>
	);
};

export default LoginView;
