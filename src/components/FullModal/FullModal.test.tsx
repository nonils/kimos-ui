import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { FullModal } from './FullModal';

describe('<FullModal />', () => {
  test('it should render a modal', () => {
    const mockHandler = jest.fn();

    const { getByText, getByRole } = render(
      <FullModal open={true} onToggle={mockHandler}>
        <div>test</div>
      </FullModal>,
    );

    const modalEl = getByText('test');
    const modalCloseEl = getByRole('button');

    expect(modalEl).toBeTruthy();

    fireEvent.click(modalCloseEl);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
