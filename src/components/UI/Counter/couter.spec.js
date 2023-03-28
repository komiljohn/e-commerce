import React from 'react';
import { render } from '@testing-library/react';
import Counter from './index';
import counterStore from '../../../store/counter';

describe('Counter component', () => {
	it('should render Counter component with values', () => {
		counterStore.increment();
		counterStore.increment();
		const { asFragment } = render(<Counter />);
		expect(asFragment(<Counter />)).toMatchSnapshot();
	});

	it('should render Counter component with empty values', () => {
		counterStore.decrement();
		const { asFragment } = render(<Counter />);
		expect(asFragment(<Counter />)).toMatchSnapshot();
	});
});
