import { FC } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Navigation from "./components/Navigation";
import { Box, Container } from "@mui/material";
import cls from "./style.module.scss";
import DeliveryLocation from "./components/DeliveryLocation";
import OrdersBasket from "./components/OrdersBasket";
import LanguageMenu from "./components/LanguageMenu";
import ProfileButton from "./components/ProfileButton";
import { blue } from "@mui/material/colors";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={cls.navbar}>
					<Box display='flex'>
						<Link color={blue[600]} className={cls.logo} href='/'>
							LOGO
						</Link>
						<Navigation />
					</Box>
					<Box display='flex'>
						<DeliveryLocation />
						<OrdersBasket />
						<LanguageMenu />
						<ProfileButton />
					</Box>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
