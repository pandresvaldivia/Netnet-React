const ActionButton = ({ text, icon, className, onClick }: ActionButtonProps) => {
	return (
		<button
			className={`${className} flex flex-col gap-1 items-center text-white`}
			onClick={onClick}
		>
			<i className={`${icon} text-2xl`} />

			<span className="text-tiny font-semibold">{text}</span>
		</button>
	);
};

type ActionButtonProps = {
	text: string;
	icon: string;
	className?: string;
	onClick?: () => void;
};

export default ActionButton;
