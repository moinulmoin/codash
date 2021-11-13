import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			// return <Component {...pageProps} />;
			router.push('/overview');
		}
	});

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
