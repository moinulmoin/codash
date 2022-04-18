const Home = () => {
	return <h1>Homepage</h1>;
};

export default Home;

export async function getServerSideProps() {
	return {
		redirect: {
			destination: '/overview',
			permanent: true,
		},
	};
}
