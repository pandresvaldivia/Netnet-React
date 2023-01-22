import { pause, play } from '@components/icons/P_icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

const PlayButton = ({ isPlaying, handlePlay, className }: PlayButtonProps) => {
	return (
		<button
			className={classNames(
				className,
				{ 'opacity-0': isPlaying },
				'absolute h-14 aspect-square rounded-full bg-black/70 transition-opacity duration-300'
			)}
			onClick={handlePlay}
			aria-label={isPlaying ? 'pause' : 'play'}
		>
			<IconWrapper icon={isPlaying ? pause : play} aria-hidden="true" />
		</button>
	);
};

type PlayButtonProps = {
	isPlaying: boolean;
	handlePlay: () => void;
	className?: string;
};

export default PlayButton;
