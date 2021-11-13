import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SidebarMobile from '../components/SidebarMobile';

const Layout = ({ children }) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<div className='w-full h-full bg-gray-100'>
			<div className='flex flex-no-wrap'>
				{/* Sidebar starts */}
				<Sidebar />
				{/*Mobile responsive sidebar*/}
				<SidebarMobile
					show={showMobileMenu}
					setShow={setShowMobileMenu}
				/>
				{/*Mobile responsive sidebar*/}
				{/* Sidebar ends */}
				<div className='w-full'>
					{/* Navigation starts */}
					<Navbar show={showMobileMenu} setShow={setShowMobileMenu} />
					{/* Navigation ends */}
					<div className='container mx-auto px-4 py-10'>
						<div className='w-full h-full rounded'>
							{/* Page content here */}
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
