import classNames from 'classnames';

export const DropdownItem = ({ children, onClick, className }: DropdownItemProps) => {
	return (
		<button role="menuitem" onClick={onClick} className={classNames(className)}>
			{children}
		</button>
	);
};

export type DropdownItemProps = {
	children: JSX.Element | string;
	onClick?: () => void;
	className?: string;
};
