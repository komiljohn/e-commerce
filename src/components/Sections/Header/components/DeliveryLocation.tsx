import { FC } from "react";
import { Avatar, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { blue } from "@mui/material/colors";

import cls from "../style.module.scss";

const DeliveryLocation: FC = () => {
	return (
		<Box className={cls.delivery_location}>
			<Avatar sx={{ bgcolor: blue[50] }}>
				<LocationOnIcon htmlColor={blue[600]} />
			</Avatar>
			<Box>
				<p>Delivery or Order to go</p>
				<p color={blue[600]}>Select a receiving method</p>
			</Box>
		</Box>
	);
};

export default DeliveryLocation;
