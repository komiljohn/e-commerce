import React, { FC } from "react";
import cls from "./styles.module.scss";

interface Props {
	children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
	return <div className={cls.container}>{children}</div>;
};

export default Container;
