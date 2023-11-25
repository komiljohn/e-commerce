import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import { formatNumbers } from "@/utils/formatNumbers";
import { Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import cls from "../style.module.scss";

interface IProps {
	description: string;
	title: string;
	price: number;
	img: StaticImageData;
}

const Product = ({ img, description, title, price }: IProps) => {
	return (
		<Grid item xs={3}>
			<article className={cls.product}>
				<Image src={img} alt={description} />
				<div className={cls.info}>
					<p className={cls.title}>{title}</p>
					<p className={cls.description}>{description}</p>
					<div className={cls.action}>
						<p className={cls.price}>
							{formatNumbers(price)} <span>sum</span>
						</p>
						<PrimaryButton>Add to cart</PrimaryButton>
					</div>
				</div>
			</article>
		</Grid>
	);
};

export default Product;
