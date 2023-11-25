import { FC } from "react";
import Link from "next/link";
import cls from "./style.module.scss";
import Navigation from "./components/Navigation";
import { Box } from "@mui/material";
import DeliveryLocation from "./components/DeliveryLocation";
import OrdersBasket from "./components/OrdersBasket";
import LanguageMenu from "./components/LanguageMenu";
import ProfileButton from "./components/ProfileButton";
import { blue } from "@mui/material/colors";
import Container from "@/components/Layout/Container";
import LogoImage from "../../../../public/images/logo.png";
import Image from "next/image";

const Header: FC = () => {
	return (
		<header id={cls.header}>
			<Container>
				<nav className={cls.navbar}>
					<Box display='flex'>
						<Link color={blue[600]} className={cls.logo} href='/'>
							<Image src={LogoImage} alt='logo' />
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
