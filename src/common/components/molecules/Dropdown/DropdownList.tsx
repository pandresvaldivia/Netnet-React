import { ReactNode } from 'react';
import classNames from 'classnames';

import { useDropdownContext } from './Dropdown';

export const DropdownList = ({ children, className }: DropdownListProps) => {
	const { isOpen } = useDropdownContext();

	return (
		<div
			className={classNames(
				className,
				{
					'opacity-100 translate-y-4 pointer-events-auto': isOpen,
					'opacity-0 -translate-y-4 pointer-events-none': !isOpen,
				},
				'flex flex-col absolute bg-white right-0 transition-all ease-in-out duration-200'
			)}
			role="menu"
		>
			{children}
		</div>
	);
};

export type DropdownListProps = {
	children: ReactNode;
	className?: string;
};
