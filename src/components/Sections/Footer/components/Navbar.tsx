import Link from "next/link";
import { FC } from "react";
import cls from "../style.module.scss";

const Navbar: FC = () => {
	return (
		<ul className={cls.navbar_list}>
			<li>
				<Link href='/'>Branches</Link>
			</li>
			<li>
				<Link href='/'>About us</Link>
			</li>
			<li>
				<Link href='/'>Contacts</Link>
			</li>
		</ul>
	);
};

export default Navbar;
