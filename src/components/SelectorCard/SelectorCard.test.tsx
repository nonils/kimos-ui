import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { SelectorCard } from './SelectorCard';
import { SmallHandIcon } from '../icons';

describe('<SelectorCard />', () => {
  test('it should fire 1 click', () => {
    const mockHandler = jest.fn();

    const { getByText, getByRole } = render(
      <SelectorCard
        isSelected={false}
        icon={<SmallHandIcon defaultColor="#fff" />}
        title="Title"
        text="This is a text"
        onClick={mockHandler}
        id={'test'}
      />,
    );

    const titleElement = getByText(/title/i);
    const textElement = getByText(/this is a text/i);
    const selectorButtonElement = getByRole('button');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();

    fireEvent.click(selectorButtonElement);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('it should it should have an active state', () => {
    const mockHandler = jest.fn();

    const { getByRole } = render(
      <SelectorCard
        id={'test'}
        isSelected={true}
        icon={<SmallHandIcon defaultColor="#fff" />}
        title="Title"
        text="This is a text"
        onClick={mockHandler}
      />,
    );

    const selectorButtonElement = getByRole('button');

    expect(selectorButtonElement).toHaveClass('selector-card--active');
  });
});
