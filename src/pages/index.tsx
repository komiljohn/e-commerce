import { FC } from "react";

import SEO from "@/components/SEO";
import Banner from "@/components/Sections/Banner";
import ProductsMenu from "@/components/Sections/ProductsMenu";

const Home: FC = () => {
	return (
		<>
			<SEO />
			<Banner />
			<ProductsMenu />
		</>
	);
};

export default Home;

// export async function getServerSideProps() {
// 	const urls = ["/posts"];
// 	const [data] = await fetchMultipleUrls(urls);

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }
