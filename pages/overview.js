import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';

const overview = () => {
	return (
		<>
			<SearchBar />
			<div className='mt-10' />
			<DataTable />
		</>
	);
};

export default overview;
