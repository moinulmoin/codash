import { useDispatch, useSelector } from 'react-redux';
import { getNextPage, getPrevPage } from '../app/overviewSlice';

export default function Pagination() {
	const { currentPage, covidData, pageSize } = useSelector(
		(state) => state.overview
	);
	const dispatch = useDispatch();

	const nextPage = async () => {
		dispatch(getNextPage());
	};

	const prevPage = () => {
		if (currentPage > 1) {
			dispatch(getPrevPage());
		}
	};
	return (
		<div className='w-60 mx-auto bg-transparent px-4 py-3 flex items-center justify-between'>
			<div className='flex-1 flex justify-between'>
				<button
					className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:text-gray-400 disabled:bg-gray-300'
					disabled={currentPage === 1}
					onClick={prevPage}
				>
					Previous
				</button>
				<button
					className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:text-gray-400 disabled:bg-gray-300'
					onClick={nextPage}
					disabled={
						covidData.length > 0 &&
						currentPage === Math.ceil(covidData.length / pageSize)
					}
				>
					Next
				</button>
			</div>
		</div>
	);
}
