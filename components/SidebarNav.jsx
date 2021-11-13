import { CogIcon, ViewGridIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarNav = () => {
	const router = useRouter();
	return (
		<ul className='py-6 pr-8 pl-10 flex flex-col gap-y-5'>
			<li
				className={`pl-6 py-3 cursor-pointer ${
					router.pathname.includes('overview') &&
					'bg-indigo-700 text-white rounded'
				}`}
			>
				<Link href='/overview'>
					<button className='flex gap-x-2 items-center'>
						<ViewGridIcon className='w-5 h-5' />
						<span>Overview</span>
					</button>
				</Link>
			</li>
			<li
				className={`pl-6 py-3 cursor-pointer ${
					router.pathname.includes('settings') &&
					'bg-indigo-700 text-white rounded'
				}`}
			>
				<Link href='/settings'>
					<button className='flex gap-x-2 items-center'>
						<CogIcon className='w-5 h-5' />
						<span>Setting</span>
					</button>
				</Link>
			</li>
		</ul>
	);
};

export default SidebarNav;
