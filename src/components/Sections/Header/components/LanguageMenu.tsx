import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import cls from "../style.module.scss";
import { langs } from "../constansts";
import Image from "next/image";

export default function LanguageMenu() {
	const [langId, setLangId] = React.useState("uz");
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const curLang = React.useMemo(() => {
		return langs.find((lang) => lang.id === langId);
	}, [langId]);

	return (
		<Box className={cls.language_menu}>
			<Button
				sx={{ bgcolor: blue[50], color: blue[600], borderRadius: "16px" }}
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				{curLang && <Image width={18} height={18} src={curLang.img} alt={curLang.title} />}
				<KeyboardArrowDownIcon />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{langs.map((lang) => (
					<MenuItem
						key={lang.id}
						className={cls.language_item}
						onClick={() => {
							setLangId(lang.id);
							handleClose();
						}}
					>
						<Image width={18} height={18} src={lang.img} alt={lang.title} />
						<span>{lang.title}</span>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
