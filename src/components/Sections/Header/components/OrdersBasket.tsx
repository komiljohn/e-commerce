import { Avatar } from "@mui/material";
import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import cls from "../style.module.scss";

const OrdersBasket: FC = () => {
	return (
		<Avatar sx={{ bgcolor: blue[50] }} className={cls.orders_basket}>
			<ShoppingCartIcon htmlColor={blue[600]} />
		</Avatar>
	);
};

export default OrdersBasket;
