import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Badge } from './Badge';

describe('renders basic content correctly', () => {
  test('render without props', () => {
    const { getByText } = render(<Badge>Content</Badge>);

    const badgeElement = getByText(/content/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge badge__primary');
  });

  test('clicking badge', () => {
    const mockHandler = jest.fn();

    const { getByText, getByRole } = render(<Badge onClick={mockHandler}>Content</Badge>);

    const badgeElement = getByText(/content/i);
    const badgeElementButton = getByRole('button');

    expect(badgeElement).toHaveClass('badge badge--clicker badge__primary');
    expect(badgeElementButton).toBeInTheDocument();

    fireEvent.click(badgeElementButton);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});

describe('renders multiple variants', () => {
  test('render primary badge', () => {
    const { getByText } = render(<Badge variant="primary">Primary</Badge>);

    const badgeElement = getByText(/primary/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge badge__primary');
  });

  test('render secondary badge', () => {
    const { getByText } = render(<Badge variant="secondary">Secondary</Badge>);

    const badgeElement = getByText(/secondary/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge badge__secondary');
  });

  test('render secondary badge', () => {
    const { getByText, getByRole } = render(
      <Badge variant="primary" onClick={() => {}}>
        With Onclick
      </Badge>,
    );

    const badgeButtonElement = getByRole('button');
    const badgeElement = getByText(/with onclick/i);

    expect(badgeButtonElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge badge__primary badge--clicker');
  });
});
