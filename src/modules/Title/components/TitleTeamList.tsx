import { useState } from 'react';
import classNames from 'classnames';

import { getTeamList } from '../helpers/team';
import { Cast } from '../interfaces/team.interface';

const TitleTeamList = ({ title, cast, className }: TitleTeamListProps) => {
	const [isTruncate, setIsTruncate] = useState(true);
	const list = getTeamList(cast, isTruncate);

	const handleTruncate = () => {
		setIsTruncate(!isTruncate);
	};

	return (
		<p className={classNames(className, 'text-tiny text-netnet-grey-200')}>
			<span className={classNames({ 'truncate w-3/4': isTruncate }, 'inline-block align-middle')}>
				{title}: {list}
			</span>
			{isTruncate && (
				<button onClick={handleTruncate} className="font-semibold inline-block p-0">
					more
				</button>
			)}
		</p>
	);
};

type TitleTeamListProps = {
	title: string;
	cast: Cast[];
	className?: string;
};

export default TitleTeamList;
