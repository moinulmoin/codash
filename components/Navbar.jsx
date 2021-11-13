import { MenuAlt1Icon } from '@heroicons/react/outline';
import Logo from './Logo';
import UserPanel from './UserPanel';

const Navbar = ({ show, setShow }) => {
	return (
		<>
			<nav className='px-6 lg:px-0 py-4 flex items-center lg:items-stretch justify-between bg-white shadow relative z-10'>
				<div className='hidden lg:flex w-full pr-6'>
					<div className='w-1/2 h-full hidden lg:flex items-center pl-6'>
						<h1 className='text-4xl'>COVID-19 Dashboard</h1>
					</div>
					<div className='w-1/2 hidden lg:flex'>
						<UserPanel />
					</div>
				</div>
				<div className='lg:hidden'>
					<Logo />
				</div>
				<div
					className='text-gray-600 visible lg:hidden relative'
					onClick={() => setShow(!show)}
				>
					{show ? (
						' '
					) : (
						<MenuAlt1Icon className='w-7 h-7 cursor-pointer' />
					)}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
