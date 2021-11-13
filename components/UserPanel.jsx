import {
	BellIcon,
	InboxInIcon,
	LogoutIcon,
	UserIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import Avatar from './Avatar';

const UserPanel = () => {
	const [profile, setProfile] = useState(false);

	return (
		<div className='w-full flex justify-between lg:gap-x-7 items-center px-4 lg:pl-8 lg:justify-end'>
			<div className='relative cursor-pointer text-gray-600'>
				<BellIcon className='h-6 w-6' />
				<div className='w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto' />
			</div>
			<InboxInIcon className='h-6 w-6 text-gray-600 cursor-pointer' />
			<div
				className='flex items-center relative cursor-pointer'
				onClick={() => setProfile(!profile)}
			>
				{profile ? (
					<ul className='z-10 p-2 w-full bg-white absolute rounded bottom-full lg:bottom-[-215%] mb-6 lg:mb-0 left-0  shadow'>
						<li className='flex w-full gap-x-4 items-center text-gray-600 hover:text-indigo-700 cursor-pointer'>
							<UserIcon className='h-5 w-5' />
							<span className='text-sm'>Profile</span>
						</li>
						<li className='flex w-full gap-x-4 items-center text-gray-600 hover:text-indigo-700 cursor-pointer mt-2'>
							<LogoutIcon className='h-5 w-5' />
							<span className='text-sm '>Sign out</span>
						</li>
					</ul>
				) : (
					''
				)}
				<div className='rounded-full order-1 lg:order-none'>
					<Avatar />
				</div>
				<p className='text-gray-800 text-sm mx-3'>Moinul Moin</p>
			</div>
		</div>
	);
};

export default UserPanel;
