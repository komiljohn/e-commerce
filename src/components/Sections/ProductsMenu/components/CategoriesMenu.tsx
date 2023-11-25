import Container from "@/components/Layout/Container";
import React, { FC, useState } from "react";
import { categories } from "../constants";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import cls from "../style.module.scss";

const CategoriesMenu: FC = () => {
	const [activeCategoryId, setActiveCategoryId] = useState("1");

	return (
		<section id={cls.categories_menu}>
			<Container>
				<>
					{categories.map((c) => (
						<Box
							key={c.id}
							sx={{
								bgcolor: c.id === activeCategoryId ? blue[50] : "white",
								color: c.id === activeCategoryId ? blue[600] : "black",
								// fontWeight: c.id === activeCategoryId ? 500 : 400,
							}}
							onClick={() => setActiveCategoryId(c.id)}
						>
							{c.title}
						</Box>
					))}
				</>
			</Container>
		</section>
	);
};

export default CategoriesMenu;
