import React from 'react';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorRoute from '../routes/Calculator';

test('Checks if the calculator button events work', async () => {
  const { container } = render(<CalculatorRoute />);

  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(container.querySelector('.screen').textContent).toEqual('10');
});
