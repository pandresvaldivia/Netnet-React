import classNames from 'classnames';
import { Props } from 'react-share/lib/ShareButton';

import { useShareContext } from '../../contexts/Share.context';
import { useTitleContext } from '../../../modules/Title/contexts/Title.context';

const ShareOption = ({ button: Button, icon: Icon, text, className }: ShareOptionProps) => {
	const { isOpen, setIsOpen } = useShareContext();
	const { title } = useTitleContext();
	const url = window.location.href;

	const content = `Seen "${title}" on Netnet yet?`;

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<Button
			title={content}
			url={url}
			className={classNames(
				className,
				{
					'translate-y-0 opacity-100 duration-1000': isOpen,
					'translate-y-2 opacity-0': !isOpen,
				},
				'flex items-center gap-2 transition ease-in-out'
			)}
			onClick={handleCloseModal}
		>
			<Icon size={32} round={true} />
			<span className="text-xl">{text}</span>
		</Button>
	);
};

type ShareOptionProps = {
	button: React.ForwardRefExoticComponent<
		Omit<
			Props<{
				quote?: string | undefined;
				hashtag?: string | undefined;
			}>,
			'forwardedRef' | 'networkName' | 'networkLink' | 'opts'
		> & {
			quote?: string | undefined;
			hashtag?: string | undefined;
		} & React.RefAttributes<HTMLButtonElement>
	>;
	icon: React.FC<
		Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & {
			bgStyle?: import('react').CSSProperties | undefined;
			borderRadius?: number | undefined;
			iconFillColor?: string | undefined;
			round?: boolean | undefined;
			size?: string | number | undefined;
		}
	>;
	text: string;
	className?: string;
};

export default ShareOption;
