import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<div className='lg:h-16 w-full text-center lg:pt-4 lg:px-8 cursor-pointer'>
				<span className='font-mono font-bold text-5xl italic text-indigo-700'>
					CODASH
				</span>
			</div>
		</Link>
	);
};

export default Logo;
