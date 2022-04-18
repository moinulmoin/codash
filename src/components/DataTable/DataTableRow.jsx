import dayjs from 'dayjs';

const DataTableRow = ({ country, cases, deaths, time }) => {
	return (
		<div className='grid grid-cols-12 p-4 mb-4 bg-white rounded-lg lg:grid-cols-4 place-items-center'>
			<span className='col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto'>
				{country}
			</span>
			<span className='col-start-4 col-end-6 lg:col-start-auto lg:col-end-auto'>
				{cases ? cases.recovered : 'N/A'}
			</span>
			<span className='col-start-7 col-end-8 lg:col-start-auto lg:col-end-auto'>
				{deaths ? deaths.total : 'N/A'}
			</span>
			<span className='col-start-9 col-end-12 lg:col-start-auto lg:col-end-auto'>
				{time
					? dayjs(time).format('HH:mm:ss' + ' ' + 'MMMM, DD')
					: 'N/A'}
			</span>
		</div>
	);
};

export default DataTableRow;
