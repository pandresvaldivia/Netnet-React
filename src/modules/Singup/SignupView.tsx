import SignupForm from './components/SignupForm';

const SignupView = () => {
	return (
		<main>
			<section className="text-white text-center">
				<h1 className="text-title font-semibold">Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>

				<SignupForm />
			</section>
		</main>
	);
};

export default SignupView;
