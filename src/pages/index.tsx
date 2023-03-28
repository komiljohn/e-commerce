import Main from '@/components/Pages/Main';
import SEO from '@/components/SEO';
import { fetchMultipleUrls } from '@/services/fetchMultipleUrls';
import { FC } from 'react';

const Home: FC = () => {
	return (
		<>
			<SEO />
			<Main />
		</>
	);
};

export default Home;

// export async function getServerSideProps(context) {
//   const urls = ['/posts']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data
//     }
//   }
// }
