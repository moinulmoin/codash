import { CogIcon, ViewGridIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarNav = () => {
	const router = useRouter();
	return (
		<ul className='py-6 pr-8 pl-10 flex flex-col gap-y-5'>
			<Link href='/overview'>
				<li
					className={`pl-6 py-3 cursor-pointer ${
						router.pathname.includes('overview') &&
						'bg-indigo-700 text-white rounded'
					}`}
				>
					<button className='flex gap-x-2 items-center'>
						<ViewGridIcon className='w-5 h-5' />
						<span>Overview</span>
					</button>
				</li>
			</Link>
			<Link href='/settings'>
				<li
					className={`pl-6 py-3 cursor-pointer ${
						router.pathname.includes('settings') &&
						'bg-indigo-700 text-white rounded'
					}`}
				>
					<button className='flex gap-x-2 items-center'>
						<CogIcon className='w-5 h-5' />
						<span>Setting</span>
					</button>
				</li>
			</Link>
		</ul>
	);
};

export default SidebarNav;
