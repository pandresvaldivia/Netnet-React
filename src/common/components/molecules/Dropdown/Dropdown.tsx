import { createContext, ReactNode, useContext, useState } from 'react';
import classNames from 'classnames';

const DropdownContext = createContext({} as DropdownContextProps);

const DropdownProvider = ({ children, className }: DropdownProviderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<DropdownContext.Provider
			value={{
				isOpen,
				setIsOpen,
			}}
		>
			<div className={classNames(className, 'relative')}>{children}</div>
		</DropdownContext.Provider>
	);
};

export const useDropdownContext = () => useContext(DropdownContext);

export type DropdownProviderProps = {
	children: ReactNode;
	className?: string;
};

type DropdownContextProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

export default DropdownProvider;
