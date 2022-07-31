import { useState } from 'react';
import HeroDetails from '../molecules/HeroDetails';

const Hero = () => {
	const [isMuted, setIsMuted] = useState(true);

	return (
		<div className="relative mb-12">
			<video
				className="h-137 w-full object-cover"
				src="/public/videos/matrix-trailer.mp4"
				loop
				autoPlay
				muted={isMuted}
				poster="/public/images/utils/poster.webp"
			/>
			<button
				className="absolute text-white right-4 bottom-36 bg-black/50 h-8 aspect-square rounded-full"
				onClick={() => setIsMuted(!isMuted)}
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
