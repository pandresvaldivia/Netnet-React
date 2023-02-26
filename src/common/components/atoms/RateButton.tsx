import { ActionButton } from '@atoms';
import { like_fill, like_stroke } from '@components/icons/L_icon';
import useRateTitle from '@hooks/useRateTitle';

const RateButton = ({ id }: AddTitleButtonProps) => {
	const { isRated, handleRate } = useRateTitle(id);

	return (
		<ActionButton
			text="Rate"
			icon={isRated ? like_fill : like_stroke}
			onClick={handleRate}
			textClasses="text-netnet-grey"
		/>
	);
};

type AddTitleButtonProps = {
	id: number;
};

export default RateButton;
