import { useTitleContext } from '../contexts/Title.context';
import { getYear, minutesToHours } from '../helpers/date';
import { getRatingPercentage } from '../helpers/number';

const Details = () => {
	const { vote_average, release_date, runtime } = useTitleContext();

	const rating = getRatingPercentage(vote_average);
	const release_year = getYear(release_date);
	const duration = minutesToHours(runtime);

	return (
		<div className="flex justify-between text-netnet-grey mb-4">
			<p className="font-bold text-netnet-green text-regular-1">{rating}% Match</p>
			<div className="flex gap-4">
				<div className="flex gap-2">
					<p className="text-regular-1">{release_year}</p>
					<p className="bg-netnet-grey-400 font-bold px-1 rounded-sm text-white">R</p>
				</div>
				<div className="flex gap-2">
					<p className="text-regular-1">{duration}</p>
					<p className="border border-netnet-grey-400 px-1 rounded-sm text-white">HD</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
