import { ReactNode } from 'react';
import classNames from 'classnames';

import { useDropdownContext } from './Dropdown';

export const DropdownButton = ({ children, className }: DropdownButtonProps) => {
	const { setIsOpen, isOpen } = useDropdownContext();

	const handleOnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<button className={classNames(className)} onClick={handleOnClick}>
			{children}
		</button>
	);
};

export type DropdownButtonProps = {
	children: ReactNode;
	className?: string;
};
