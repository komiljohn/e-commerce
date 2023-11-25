import Link from "next/link";
import React, { FC } from "react";
import cls from "../style.module.scss";

const Navigation: FC = () => {
	return (
		<ul className={cls.navbar_menu}>
			<li>
				<Link href='/'>Menu</Link>
			</li>
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

export default Navigation;
