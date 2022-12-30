import { useEffect, useRef, useState } from 'react';

import { handleVisibility } from '../../helpers/page-visibility.helper';
import HeroDetails from '../molecules/HeroDetails';

const Hero = () => {
	const [isMuted, setIsMuted] = useState(true);
	const videoPlayer = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		document.addEventListener('visibilitychange', (e) => {
			if (videoPlayer.current) {
				handleVisibility(e, videoPlayer.current);
			}
		});

		return () => {
			document.removeEventListener('visibilitychange', (e) => {
				if (videoPlayer.current) {
					handleVisibility(e, videoPlayer.current);
				}
			});
		};
	}, []);

	return (
		<div className="relative mb-12">
			<video
				ref={videoPlayer}
				className="h-137 w-full object-cover"
				src="/videos/matrix-trailer.mp4"
				loop
				autoPlay
				muted={isMuted}
				poster="/images/utils/poster.webp"
			/>
			<button
				className="absolute text-white right-4 bottom-36 bg-black/50 h-8 aspect-square rounded-full"
				onClick={() => setIsMuted(!isMuted)}
				aria-label={isMuted ? 'Activate sound' : 'Mute sound'}
			>
				<span className="relative top-px left-px">
					{isMuted && <i className="icon-muted" />}
					{!isMuted && <i className="icon-volume" />}
				</span>
			</button>
			<HeroDetails
				image="./images/utils/title.png"
				alt="Matrix Reloaded poster"
				tags="Surrrealista • Distópico • Hábil • Siniestro •
				Emocionante"
			/>
		</div>
	);
};

export default Hero;
