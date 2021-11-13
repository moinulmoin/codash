import Logo from './Logo';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
	return (
		<div className='absolute lg:relative w-80 h-screen shadow bg-white hidden rounded-tr rounded-br lg:block'>
			<Logo />
			<div className='mb-10' />
			<SidebarNav />
		</div>
	);
};

export default Sidebar;
