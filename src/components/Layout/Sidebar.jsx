import Logo from '../Logo';
import SidebarNav from '../DataTable/SidebarNav';

const Sidebar = () => {
	return (
		<div className='absolute lg:relative w-80 min-h-screen shadow bg-white hidden rounded-tr rounded-br lg:block'>
			<Logo />
			<div className='mb-10' />
			<SidebarNav />
		</div>
	);
};

export default Sidebar;
