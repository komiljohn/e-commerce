import { FC } from "react";
import CategoriesMenu from "./components/CategoriesMenu";
import Products from "./components/Products";

const ProductsMenu: FC = () => {
	return (
		<main>
			<CategoriesMenu />
			<Products />
		</main>
	);
};

export default ProductsMenu;
