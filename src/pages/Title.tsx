import ShareProvider from '@modules/Title/contexts/Share.context';
import TitleProvider from '@modules/Title/contexts/Title.context';
import TitleView from '@modules/Title/TitleView';

const Title = () => {
	return (
		<TitleProvider>
			<ShareProvider>
				<TitleView />
			</ShareProvider>
		</TitleProvider>
	);
};

export default Title;
