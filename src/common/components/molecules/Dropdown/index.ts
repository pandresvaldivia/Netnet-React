import DropdownProvider, { DropdownProviderProps } from './Dropdown';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';
import { DropdownItem, DropdownItemProps } from './DropdownItem';
import { DropdownList, DropdownListProps } from './DropdownList';

export { DropdownButton } from './DropdownButton';
export { DropdownItem } from './DropdownItem';
export { DropdownList } from './DropdownList';

const Dropdown: DropdownProps = Object.assign(DropdownProvider, {
	Button: DropdownButton,
	List: DropdownList,
	Item: DropdownItem,
});

type DropdownProps = {
	({ children }: DropdownProviderProps): JSX.Element;
	Button: ({ children, className }: DropdownButtonProps) => JSX.Element;
	List: ({ children, className }: DropdownListProps) => JSX.Element;
	Item: ({ children, className }: DropdownItemProps) => JSX.Element;
};

export default Dropdown;
