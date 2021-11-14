import dayjs from 'dayjs';

const DataTableRow = ({ country, code, recovered, deaths, lastUpdate }) => {
	return (
		<div className='grid grid-cols-12 lg:grid-cols-4 bg-white p-4 mb-4 rounded-lg place-items-center'>
			<span className='col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto'>
				{country}{' '}
				<img
					className='inline'
					src={`https://flagcdn.com/16x12/${
						code && code.toLowerCase()
					}.png`}
					alt={code ? country : 'N/A'}
					width='16'
					height='12'
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
					? dayjs(lastUpdate).format('HH:mm:ss' + ' ' + 'MMMM, DD')
					: 'N/A'}
			</span>
		</div>
	);
};

export default DataTableRow;
