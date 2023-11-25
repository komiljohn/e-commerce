import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import cls from "./styles.module.scss";

interface IProps {
	children: string;
}

const PrimaryButton = ({ children }: IProps) => {
	return (
		<Button className={cls.button} variant='contained' sx={{ bgcolor: blue[600], color: "#fff" }}>
			{children}
		</Button>
	);
};

export default PrimaryButton;
