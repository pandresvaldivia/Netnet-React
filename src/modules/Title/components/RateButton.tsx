import { ActionButton } from '@atoms';
import { like_fill, like_stroke } from '@components/icons/L_icon';

import useRateTitle from '../hooks/useRateTitle';

const RateButton = () => {
	const { isRated, handleRate } = useRateTitle();

	return <ActionButton text="Rate" icon={isRated ? like_fill : like_stroke} onClick={handleRate} />;
};

export default RateButton;
