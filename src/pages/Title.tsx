import TitleProvider from '@modules/Title/contexts/Title.context';
import TitleView from '@modules/Title/TitleView';

const Title = () => {
	return (
		<TitleProvider>
			<TitleView />
		</TitleProvider>
	);
};

export default Title;
