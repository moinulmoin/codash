import { Provider } from 'react-redux';
import store from '../app/store';
import Layout from '../components/Layout';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Layout>
	);
}

export default MyApp;
