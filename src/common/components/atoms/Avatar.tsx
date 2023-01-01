const Avatar = ({ image, alt = 'User avatar' }: AvatarProps) => {
	return (
		<figure className="h-6 aspect-square rounded overflow-hidden">
			<img src={image} alt={alt} height="24" width="24" />
		</figure>
	);
};

type AvatarProps = {
	image: string;
	alt?: string;
};

export default Avatar;
