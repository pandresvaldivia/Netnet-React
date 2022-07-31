const Button = ({ text, icon }: ButtonProps) => {
	return (
		<button className="flex items-center px-4 py-1 bg-white rounded-sm">
			<i className={`${icon} mr-1 text-2xl`} />
			<span className="text-tiny font-semibold">{text}</span>
		</button>
	);
};

type ButtonProps = {
	text: string;
	icon: string;
};

export default Button;
