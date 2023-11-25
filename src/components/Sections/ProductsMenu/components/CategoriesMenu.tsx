import Container from "@/components/Layout/Container";
import React, { FC, useState } from "react";
import { categories } from "../constants";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import cls from "../style.module.scss";

const CategoriesMenu: FC = () => {
	const [activeCategoryId, setActiveCategoryId] = useState("1");

	return (
		<section>
			<Container>
				<Box className={cls.categories}>
					{categories.map((c) => (
						<Box
							key={c.id}
							sx={{
								bgcolor: c.id === activeCategoryId ? blue[50] : "#fff",
								color: c.id === activeCategoryId ? blue[600] : "#000",
								fontWeight: c.id === activeCategoryId ? 500 : 400,
							}}
							onClick={() => setActiveCategoryId(c.id)}
						>
							{c.title}
						</Box>
					))}
				</Box>
			</Container>
		</section>
	);
};

export default CategoriesMenu;
