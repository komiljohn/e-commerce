import { Grid } from "@mui/material";
import { FC } from "react";

import Container from "@/components/Layout/Container";
import { categories } from "../constants";
import Product from "./Product";
import cls from "../style.module.scss";

const Products: FC = () => {
	const withProducts = categories.filter((c) => c.products.length);

	return (
		<section id={cls.products}>
			<Container>
				<>
					{withProducts.map((c) => (
						<div key={c.id}>
							<h2 className={cls.category_title}>{c.title}</h2>
							<Grid container spacing={2.25}>
								{c.products.map((p) => (
									<Product key={p.id} {...p} />
								))}
							</Grid>
						</div>
					))}
				</>
			</Container>
		</section>
	);
};

export default Products;
