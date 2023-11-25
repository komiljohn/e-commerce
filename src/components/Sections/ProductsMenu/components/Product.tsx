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
	// const [isVisible, handleOpen, handleClose] = useBooleanState();

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
			{/* {isVisible && (
				<Modal
					open={isVisible}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<section className={cls.modal}>
						<div>
							<Image src={img} alt={description} />
						</div>
						<div>
							<h2>{title}</h2>
							<p>{description}</p>
						</div>
					</section>
				</Modal>
			)} */}
		</Grid>
	);
};

export default Product;
