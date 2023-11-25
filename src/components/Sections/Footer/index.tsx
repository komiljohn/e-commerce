import { blue } from "@mui/material/colors";
import Link from "next/link";
import { FC } from "react";
import cls from "./style.module.scss";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Container from "@/components/Layout/Container";

const Main: FC = () => {
	return (
		<footer id={cls.footer}>
			<Container>
				<>
					<nav className={cls.navbar}>
						<Link color={blue[600]} className={cls.logo} href='/'>
							LOGO
						</Link>
						<Navbar />
					</nav>
					<div className={cls.rights}>
						<p>©Udevs 2020 - 2022 All rights reserved</p>
						<Socials />
					</div>
				</>
			</Container>
		</footer>
	);
};

export default Main;
