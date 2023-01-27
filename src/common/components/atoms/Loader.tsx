import classNames from 'classnames';

const Loader = ({ className }: LoaderProps) => {
	return (
		<span
			aria-label="Loading..."
			className={classNames(
				className,
				'loader inline-block h-12 aspect-square border-t-4 border-t-netnet-red border-r-4 border-r-transparent rounded-full'
			)}
		/>
	);
};

type LoaderProps = {
	className?: string;
};

export default Loader;
