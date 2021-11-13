import { useDispatch, useSelector } from 'react-redux';
import { getSearchTerm } from '../store/overviewSlice';
const SearchBar = () => {
	const searchTerm = useSelector((state) => state.overview.searchTerm);
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				return;
			}}
		>
			<input
				value={searchTerm}
				type='text'
				placeholder='Search country by Name'
				className='rounded'
				onChange={(e) => dispatch(getSearchTerm(e.target.value))}
			/>
		</form>
	);
};

export default SearchBar;
