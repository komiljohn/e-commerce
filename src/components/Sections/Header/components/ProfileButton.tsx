import { Avatar } from "@mui/material";
import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";

const ProfileButton: FC = () => {
	return (
		<Avatar sx={{ bgcolor: blue[50] }}>
			<PersonIcon htmlColor={blue[600]} />
		</Avatar>
	);
};

export default ProfileButton;
