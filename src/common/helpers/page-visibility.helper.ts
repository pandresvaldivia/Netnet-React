export const handleVisibility = (e: Event, video: HTMLVideoElement) => {
	const tab = e.target as HTMLElement;

	if (tab.hidden) {
		video.pause();
	} else {
		video.play();
	}
};
