import { Container } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import styles from './style.module.scss';

const BlogList: FC = () => {
	return (
		<Container>
			<div className={styles.blog}>
				<Link href='/blog/1'>Blog1</Link>
				<Link href='/blog2'>Blog2</Link>
			</div>
		</Container>
	);
};

export default BlogList;
