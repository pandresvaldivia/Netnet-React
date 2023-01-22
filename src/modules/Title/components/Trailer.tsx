import { MouseEvent, useState } from 'react';
import { MuteButton } from '@atoms';
import useFetch from '@hooks/useFetch';
import { MovieTrailer } from '@interfaces/movie-trailer';
import ReactPlayer from 'react-player/youtube';

import PlayButton from './PlayButton';

const Trailer = ({ id, poster }: TrailerProps) => {
	const [muted, setMuted] = useState<boolean>(true);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);
	const { data, isLoading, error } = useFetch<MovieTrailer>(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ab595fcfafda6a6164c98c7c7cfb1784&language=en-US`
	);

	if (!data || isLoading || error)
		return (
			<div className="w-full h-40 overflow-hidden">
				<img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
			</div>
		);

	const { results } = data;
	const youtubeTrailer = results.find((result) => result.site === 'YouTube');

	const handleMute = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		setMuted(!muted);
	};

	const handlePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<section
			aria-label="Trailer"
			className="relative flex items-center justify-center"
			onClick={handlePlay}
		>
			<div className="relative w-full h-40 overflow-hidden">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${youtubeTrailer?.key}`}
					playing={isPlaying}
					muted={muted}
					width="100%"
					height="132%"
					style={{ position: 'relative', top: '-20px', pointerEvents: 'none' }}
					onPause={() => setIsPlaying(false)}
					loop
				/>
			</div>
			<PlayButton isPlaying={isPlaying} handlePlay={handlePlay} />
			<MuteButton handleMute={handleMute} muted={muted} />
		</section>
	);
};

type TrailerProps = {
	id: string;
	poster: string;
};

export default Trailer;
