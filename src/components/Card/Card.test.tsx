import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('cards works correctly', () => {
  test('render card without props', () => {
    const { getByText } = render(<Card>Content</Card>);

    const cardElement = getByText(/content/i);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement.parentNode).toHaveClass('card card__primary');
  });

  test('render card custom classname', () => {
    const { getByText } = render(<Card className="custom-class">Content</Card>);

    const cardElement = getByText(/content/i);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement.parentNode).toHaveClass('card custom-class card__primary');
  });
});

describe('render using multiple variants', () => {
  test('render primary card', () => {
    const { getByText } = render(<Card variant="primary">Primary Content</Card>);

    const cardElement = getByText(/primary content/i);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement.parentNode).toHaveClass('card card__primary');
  });

  test('render secondary card', () => {
    const { getByText } = render(<Card variant="secondary">Secondary Content</Card>);

    const cardElement = getByText(/secondary content/i);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement.parentNode).toHaveClass('card card__secondary');
  });
});
