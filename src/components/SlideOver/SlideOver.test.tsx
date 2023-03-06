import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { SlideOver } from './SlideOver';

describe('<SlideOver />', () => {
  test('it should render a slideover', () => {
    const mockHandler = jest.fn();

    const { getByText, getByRole, getByTestId } = render(
      <SlideOver afterTitleContent="Content" title="Header" open={true} onToggle={mockHandler}>
        <div>test</div>
      </SlideOver>,
    );

    const modalEl = getByText('test');
    const modalCloseEl = getByRole('button');
    const afterTitleElement = getByTestId('after-title-content');

    expect(modalEl).toBeInTheDocument();
    expect(afterTitleElement).toBeInTheDocument();

    fireEvent.click(modalCloseEl);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
