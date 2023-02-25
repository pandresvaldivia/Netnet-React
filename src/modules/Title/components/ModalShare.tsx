import { cross } from '@components/icons/C_icon';
import classNames from 'classnames';
import {
	FacebookIcon,
	FacebookShareButton,
	LineIcon,
	LineShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TelegramIcon,
	TelegramShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share';
import IconWrapper from 'src/common/templates/IconWrapper';

import { useShareContext } from '../contexts/Share.context';

import ShareOption from './ShareOption';

const ModalShare = () => {
	const { setIsOpen, isOpen } = useShareContext();

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<div
			className={classNames(
				{
					'top-0': isOpen,
					'top-full': !isOpen,
				},
				'fixed flex flex-col items-center justify-center gap-4 h-screen w-screen z-1 left-0 bg-black/80 backdrop-blur-md transition-all duration-200'
			)}
		>
			<p className="text-lg">Share to ...</p>
			<ShareOption button={WhatsappShareButton} icon={WhatsappIcon} text="WhatsApp" />
			<ShareOption
				button={TelegramShareButton}
				icon={TelegramIcon}
				text="Telegram"
				className="delay-100"
			/>
			<ShareOption button={LineShareButton} icon={LineIcon} text="Line" className="delay-200" />
			<ShareOption
				button={LinkedinShareButton}
				icon={LinkedinIcon}
				text="LinkedIn"
				className="delay-300"
			/>
			<ShareOption
				button={FacebookShareButton}
				icon={FacebookIcon}
				text="Facebook"
				className="delay-400"
			/>
			<button
				className="absolute bottom-12 bg-white text-neutral-900 rounded-full p-1"
				onClick={handleCloseModal}
			>
				<IconWrapper icon={cross} height="40" width="40" />
			</button>
		</div>
	);
};

export default ModalShare;
