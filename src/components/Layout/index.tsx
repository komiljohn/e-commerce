import React, { FC } from "react";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";

interface Props {
	children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
