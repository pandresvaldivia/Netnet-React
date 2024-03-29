import { Avatar, UserMenuProfile } from '@atoms';
import { Dropdown } from '@molecules';

import { singOut } from '../../../services/helpers/auth.helper';
import { PROFILES } from '../../constants/profiles.constant';

const UserMenu = () => {
	return (
		<Dropdown>
			<Dropdown.Button className="align-middle">
				<Avatar image="/images/utils/avatars/chicken.webp" />
			</Dropdown.Button>
			<Dropdown.List className="bg-black/90 w-52 text-white text-smaller rounded-lg">
				<div className="flex flex-col pt-2.5 pb-1.5">
					{PROFILES.map((profile) => (
						<UserMenuProfile key={profile.name} name={profile.name} image={profile.image} />
					))}
				</div>
				<hr className="border-white/25 " />
				<div className="py-2.5">
					<Dropdown.Item onClick={singOut} className="py-1.5 px-2.5 w-full">
						Sign out of Netnet
					</Dropdown.Item>
				</div>
			</Dropdown.List>
		</Dropdown>
	);
};

export default UserMenu;
