import Link from "next/link";
import { FC } from "react";
import { FacebookSvg, InstagramSvg, TelegramSvg } from "../assets/icons";
import cls from "../style.module.scss";

const Socials: FC = () => {
	return (
		<ul className={cls.socials}>
			<li>
				<Link href=''>
					<InstagramSvg />
				</Link>
			</li>
			<li>
				<Link href=''>
					<FacebookSvg />
				</Link>
			</li>
			<li>
				<Link href=''>
					<TelegramSvg />
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
