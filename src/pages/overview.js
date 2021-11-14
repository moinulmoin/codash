import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const overview = () => {
	return (
		<>
			<SearchBar />
			<div className='mt-10' />
			<DataTable />
			<div className='mt-10' />
			<Pagination />
		</>
	);
};

export default overview;
