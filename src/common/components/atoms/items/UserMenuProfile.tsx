import Dropdown from '../../molecules/Dropdown/index';
import Avatar from '../Avatar';

const UserMenuProfile = ({ image, name }: UserMenuProfileProps) => {
	return (
		<Dropdown.Item className="flex items-center gap-2 px-2.5 py-1.5">
			<>
				<Avatar image={image} alt={`${name} avatar`} />
				<span>{name}</span>
			</>
		</Dropdown.Item>
	);
};

type UserMenuProfileProps = {
	image: string;
	name: string;
};

export default UserMenuProfile;
