import classNames from 'classnames';

import LogoutHeader from '../../common/components/molecules/LogoutHeader';

import SignupForm from './components/SignupForm';

import bannerStyles from '../../styles/components/molecules/signup-banner.module.scss';

const SignupView = () => {
	return (
		<main>
			<LogoutHeader className="absolute" />
			<section className={classNames(bannerStyles.banner)}>
				<div
					className={classNames(
						bannerStyles.bannerContent,
						'flex flex-col items-center justify-center text-white text-center pt-36 pb-16 px-4'
					)}
				>
					<h1 className="text-title font-semibold mb-4">Unlimited movies, TV shows, and more.</h1>
					<h2 className="text-lg mb-4">Watch anywhere. Cancel anytime.</h2>
					<SignupForm />
				</div>
			</section>
		</main>
	);
};

export default SignupView;
