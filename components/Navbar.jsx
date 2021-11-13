import { MenuAlt1Icon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import UserPanel from './UserPanel';

const Navbar = ({ show, setShow }) => {
	const router = useRouter();

	const componentName = router.pathname.slice(1);
	const capitalizeName =
		componentName.charAt(0).toUpperCase() + componentName.slice(1);

	return (
		<>
			<nav className='px-4 lg:px-0 py-4 flex items-center lg:items-stretch justify-between relative z-10'>
				<div className='hidden lg:flex w-full pr-6'>
					<div className='w-1/2 h-full hidden lg:flex items-center pl-6'>
						<h1 className='text-4xl font-semibold'>
							{capitalizeName}
						</h1>
					</div>
					<div className='w-1/2 hidden lg:flex'>
						<UserPanel />
					</div>
				</div>
				<div className='lg:hidden'>
					<h1 className='text-4xl font-semibold'>{capitalizeName}</h1>
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
