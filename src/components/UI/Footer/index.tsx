import styles from './style.module.scss';
import Link from 'next/link';
import { Container } from '@mui/material';
import { FC } from 'react';
const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.box}>
					<Link href='/' className={styles.logo}>
						<h2>Logo</h2>
					</Link>
					<nav>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/blog'>Blog</Link>
							</li>
							<li>
								<Link href='/about'>About</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
