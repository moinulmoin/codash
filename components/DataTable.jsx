import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCountriesQuery } from '../store/countryApi';
import { getSearchResults } from '../store/overviewSlice';
import Spinners from './Spinners';

const DataTable = () => {
	const { data, isLoading, isError } = useGetAllCountriesQuery();
	const { searchTerm, searchResults } = useSelector(
		(state) => state.overview
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data && !isLoading && searchTerm) {
			const filtered = data.filter((country) =>
				country.country.toLowerCase().includes(searchTerm.toLowerCase())
			);
			dispatch(getSearchResults(filtered));
		}
	}, [data, searchTerm, isLoading]);

	const covidData = searchTerm ? searchResults : data;

	return (
		<section className='w-full border-collapse'>
			<div className='px-4 grid grid-cols-12 lg:grid-cols-4 text-left justify-between text-gray-700 font-medium mb-6 place-items-center'>
				<span className=' text-indigo-500 col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto'>
					Country
				</span>
				<span className='text-green-500 col-start-4 col-end-6 lg:col-start-auto lg:col-end-auto'>
					Recovered
				</span>
				<span className='text-red-500 col-start-7 col-end-8 lg:col-start-auto lg:col-end-auto'>
					Deaths
				</span>
				<span className='col-start-9 col-end-12 lg:col-start-auto lg:col-end-auto'>
					Last Updated
				</span>
			</div>
			{isLoading && <Spinners />}
			{covidData &&
				covidData.length > 0 &&
				covidData.map((eachCountry) => {
					const { country, code, recovered, deaths, lastUpdate } =
						eachCountry;
					return (
						<div
							key={nanoid()}
							className='grid grid-cols-12 lg:grid-cols-4 bg-white p-4 mb-4 rounded-lg place-items-center'
						>
							<span className='col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto'>
								{country}{' '}
								<img
									className='inline'
									src={`https://flagcdn.com/16x12/${
										code && code.toLowerCase()
									}.png`}
									alt={code ? country : 'N/A'}
								/>
							</span>
							<span className='col-start-4 col-end-6 lg:col-start-auto lg:col-end-auto'>
								{recovered ? recovered : 'N/A'}
							</span>
							<span className='col-start-7 col-end-8 lg:col-start-auto lg:col-end-auto'>
								{deaths ? deaths : 'N/A'}
							</span>
							<span className='col-start-9 col-end-12 lg:col-start-auto lg:col-end-auto'>
								{lastUpdate
									? dayjs(lastUpdate).format(
											'HH:mm:ss' + ' ' + 'MMMM, DD'
									  )
									: 'N/A'}
							</span>
						</div>
					);
				})}
		</section>
	);
};

export default DataTable;
