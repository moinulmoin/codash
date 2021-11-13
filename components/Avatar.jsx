import moinulmoin from '../assets/images/moinulmoin.jpg';
import Image from 'next/image';

const Avatar = () => {
	return (
		<div className='relative w-10 h-10'>
			<Image
				className='rounded-full'
				src={moinulmoin}
				layout='fill'
				alt='avatar'
				objectFit
			/>
			<div className='w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto' />
		</div>
	);
};

export default Avatar;
