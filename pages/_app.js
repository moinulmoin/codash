import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import store from '../store';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			router.push('/overview');
		}
	});

	return (
		<Layout>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Layout>
	);
}

export default MyApp;
