import { FC } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import BannerImage from "./assets/banner.png";
import BannerImage2 from "./assets/banner-2.png";
import Container from "@/components/Layout/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./style.module.scss";

function SampleNextArrow(props: CustomArrowProps) {
	const { onClick } = props;
	return (
		<div
			className={`${cls.arrows} ${cls.left}`}
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}
			}}
		>
			<KeyboardArrowLeftIcon fontSize='large' />
		</div>
	);
}
function SamplePrevArrow(props: CustomArrowProps) {
	const { onClick } = props;

	return (
		<div
			className={`${cls.arrows} ${cls.right}`}
			onClick={(e) => {
				if (onClick) {
					onClick(e);
				}
			}}
		>
			<KeyboardArrowRightIcon fontSize='large' />
		</div>
	);
}

const Banner: FC = () => {
	// const [activeSlide, setActiveSlide] = useState(0);

	// const toNextSlide = () => {
	// 	setActiveSlide((p) => p + 1);
	// };

	// const toPreviousSlide = () => {
	// 	setActiveSlide((p) => p - 1);
	// };

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: cls.slick_dots,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section id={cls.banner}>
			<Container>
				<Slider {...settings}>
					<div>
						<Image style={{ width: "100%", height: "auto" }} src={BannerImage} alt='banner' />
					</div>
					<div>
						<Image style={{ width: "100%", height: "auto" }} src={BannerImage2} alt='banner' />
					</div>
					<div>
						<Image style={{ width: "100%", height: "auto" }} src={BannerImage} alt='banner' />
					</div>
				</Slider>
			</Container>
		</section>
	);
};

export default Banner;
