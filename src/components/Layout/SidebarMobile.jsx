import { XIcon } from '@heroicons/react/outline';
import Logo from '../Logo';
import SidebarNav from '../DataTable/SidebarNav';
import UserPanel from '../UserPanel';

const SidebarMobile = ({ show, setShow }) => {
	return (
		<div
			className={
				show
					? 'w-full h-full absolute z-40  transform  translate-x-0 '
					: '   w-full h-full absolute z-40  transform -translate-x-full'
			}
		>
			<div
				className='bg-gray-800 opacity-50 absolute h-full w-full lg:hidden'
				onClick={() => setShow(!show)}
			/>
			<div className='absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full rounded-tr rounded-br  pt-3'>
				<div className='flex flex-col relative justify-between h-full w-full'>
					<div>
						<div className='flex items-center justify-between px-8'>
							<Logo />
							<div
								className='flex items-center justify-center h-10 w-10'
								onClick={() => setShow(!show)}
							>
								<XIcon className='w-5 h-5 absolute top-0 right-0 mr-2 mt-2 cursor-pointer' />
							</div>
						</div>
						<div className='mb-10' />
						<SidebarNav />
					</div>
					<div className='w-full'>
						<div className='border-t border-gray-300 pt-3'>
							<UserPanel />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarMobile;
