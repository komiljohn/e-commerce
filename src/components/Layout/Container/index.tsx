import React, { FC } from "react";
import cls from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
	return <main className={cls.container}>{children}</main>;
};

export default Container;
