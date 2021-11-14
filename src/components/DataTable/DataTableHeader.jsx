const DataTableHeader = () => {
	return (
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
	);
};

export default DataTableHeader;
