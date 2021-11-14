import { useDispatch, useSelector } from 'react-redux';
import { getSearchTerm } from '../app/overviewSlice';
const SearchBar = () => {
	const searchTerm = useSelector((state) => state.overview.searchTerm);
	const dispatch = useDispatch();

	return (
		<input
			value={searchTerm}
			type='text'
			placeholder='Search country by Name'
			className='rounded focus:border-indigo-500'
			onChange={(e) => dispatch(getSearchTerm(e.target.value))}
		/>
	);
};

export default SearchBar;
