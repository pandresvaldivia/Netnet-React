import { createContext, ReactNode, useContext, useState } from 'react';

const ShareContext = createContext({} as ShareContextProps);

const ShareProvider = ({ children }: ShareProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ShareContext.Provider
			value={{
				isOpen,
				setIsOpen,
			}}
		>
			{children}
		</ShareContext.Provider>
	);
};

type ShareProviderProps = {
	children: ReactNode;
};

type ShareContextProps = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

export const useShareContext = () => useContext(ShareContext);

export default ShareProvider;
