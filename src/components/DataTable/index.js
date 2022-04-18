import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCountriesQuery } from '../../app/countryApi';
import { getCovidData } from '../../app/overviewSlice';
import Spinners from '../Spinners';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

const DataTable = () => {
	const { data, isLoading, isError } = useGetAllCountriesQuery({
		pollingInterval: 900000,
	});

	const { searchTerm, covidData, currentPage, pageSize } = useSelector(
		(state) => state.overview
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data && searchTerm) {
			const filtered = data.response.filter((country) =>
				country.country.toLowerCase().includes(searchTerm.toLowerCase())
			);
			dispatch(getCovidData(filtered));
			return;
		}
		if (data && !searchTerm) {
			dispatch(getCovidData(data.response));
		}
	}, [data, searchTerm]);

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = currentPage * pageSize;
	const paginatedData = covidData.slice(startIndex, endIndex);

	if (isError) {
		return (
			<section>
				<h1 className='text-4xl text-center text-red-500'>
					Something is wrong with API
				</h1>
			</section>
		);
	}

	return (
		<section className='w-full border-collapse'>
			<p className='mb-10 text-xl text-center'>
				Showing {paginatedData.length} results out of {covidData.length}
			</p>
			<DataTableHeader />
			{isLoading && <Spinners />}
			{paginatedData.length > 0 &&
				paginatedData.map((eachCountry) => (
					<DataTableRow {...eachCountry} key={nanoid()} />
				))}
		</section>
	);
};

export default DataTable;
