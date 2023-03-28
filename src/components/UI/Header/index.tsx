import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './style.module.scss';

const Header: FC = () => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const langs = [
		{
			key: 'ru',
			label: 'ru',
		},
		{
			key: 'uz',
			label: 'uz',
		},
		{
			key: 'en',
			label: 'en',
		},
	];
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.box}>
					<Link href='/' className={styles.logo}>
						<h2>Logo</h2>
					</Link>
					<nav>
						<ul>
							<li>
								<Link href='/'>{t('home')}</Link>
							</li>
							<li>
								<Link href='/blog'>{t('blog')}</Link>
							</li>
							<li>
								<Link href='/about'>{t('about')}</Link>
							</li>
						</ul>
					</nav>
					<div className={styles.langs}>
						<ul>
							{langs.map((item) => (
								<li key={item.key}>
									<Link href={router.asPath} locale={item.key}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
