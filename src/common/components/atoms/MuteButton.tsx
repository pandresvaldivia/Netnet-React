import { MouseEvent } from 'react';
import { sound_off, sound_on } from '@components/icons/S_icon';
import classNames from 'classnames';
import IconWrapper from 'src/common/templates/IconWrapper';

const MuteButton = ({ handleMute, muted, className }: MuteButtonProps) => {
	return (
		<button
			className={classNames(
				className,
				'flex justify-center items-center absolute bottom-4 right-4 h-8 aspect-square rounded-full bg-black/70'
			)}
			onClick={handleMute}
		>
			<IconWrapper
				className="h-6"
				icon={muted ? sound_off : sound_on}
				fill="transparent"
				stroke="#ffffff"
			/>
		</button>
	);
};

type MuteButtonProps = {
	handleMute: (e: MouseEvent<HTMLElement>) => void;
	muted: boolean;
	className?: string;
};

export default MuteButton;
