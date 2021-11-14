import Head from 'next/head';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarMobile from './SidebarMobile';

const Layout = ({ children }) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<div className='w-full h-full bg-gray-100'>
			<Head>
				<title>Codash</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
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
					<div className='container mx-auto px-4 py-8 2xl:px-10'>
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
