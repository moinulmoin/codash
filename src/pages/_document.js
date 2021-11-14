import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap'
						rel='stylesheet'
					/>
					<meta name='application-name' content='Covid Dashboard' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta
						name='apple-mobile-web-app-title'
						content='Covid Dashboard'
					/>
					<meta name='description' content='PWA Dashboard App' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='#ffffff' />

					<link
						rel='apple-touch-icon'
						sizes='192x192'
						href='/icon-192x192.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='256x256'
						href='/icon-256x256.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='384x384'
						href='/icon-384x384.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='512x512'
						href='/icon-512x512.png'
					/>

					<link rel='icon' type='image/png' href='/favicon.png' />
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/favicon.png' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
