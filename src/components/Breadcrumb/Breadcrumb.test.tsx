import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('render content correctly', () => {
  test('render content with basic data', () => {
    const mockHandler = jest.fn();

    const { getByText, getAllByRole } = render(
      <Breadcrumb pages={['Item 1', 'Item 2']} handleNavigation={mockHandler} />,
    );

    const homeElement = getByText(/home/i);
    const firstPageElement = getByText(/item 1/i);
    const secondPageElement = getByText(/item 2/i);

    const [homeButton] = getAllByRole('button');

    expect(homeElement).toBeInTheDocument();
    expect(firstPageElement).toBeInTheDocument();
    expect(secondPageElement).toBeInTheDocument();

    fireEvent.click(homeButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('render content with custom home button', () => {
    const mockHandler = jest.fn();

    const { getByText, getAllByRole } = render(
      <Breadcrumb home="Custom Home" pages={['Item 1', 'Item 2']} handleNavigation={mockHandler} />,
    );

    const homeElement = getByText(/custom home/i);
    const [homeButton] = getAllByRole('button');

    expect(homeElement).toBeInTheDocument();

    fireEvent.click(homeButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
