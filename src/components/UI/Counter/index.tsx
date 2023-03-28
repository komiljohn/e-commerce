import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import { observer } from 'mobx-react-lite';
import counterStore from '@/store/Counter';

const Counter: FC = () => {
	const [incrementAmount, setIncrementAmount] = useState<string>('2');

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Increment value'
					onClick={counterStore.increment}
				>
					+
				</button>
				<span className={styles.value}>{counterStore.value}</span>
				<button
					className={styles.button}
					aria-label='Decrement value'
					onClick={counterStore.decrement}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						counterStore.incrementByAmount(Number(incrementAmount) || 0)
					}
				>
					Add Amount
				</button>
			</div>
		</div>
	);
};

export default observer(Counter);
