const MenuItem = ({ text, icon }: MenuItemProps) => {
	return (
		<a href="#" className="flex flex-col items-center py-3 text-netnet-grey">
			<i aria-hidden="true" className={`text-2xl ${icon}`} />
			<span className="text-tiny">{text}</span>
		</a>
	);
};

type MenuItemProps = {
	text: string;
	icon: string;
};

export default MenuItem;
