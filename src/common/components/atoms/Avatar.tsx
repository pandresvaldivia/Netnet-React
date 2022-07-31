import { Link } from 'react-router-dom';

const Avatar = () => {
	return (
		<Link to="profile">
			<figure className="h-6 aspect-square rounded overflow-hidden">
				<img
					src="/images/utils/avatar.webp"
					alt="User avatar"
					height="24"
					width="24"
				/>
			</figure>
		</Link>
	);
};

export default Avatar;
