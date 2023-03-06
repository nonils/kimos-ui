import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';

describe('button works correctly', () => {
  test('render button without props', () => {
    const { getByRole } = render(<Button id="button">Content</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__primary');
    expect(buttonElement).toHaveTextContent(/content/i);
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveAttribute('id', 'button');
  });

  test('render button with custom classes', () => {
    const { getByRole } = render(
      <Button id="button" className="random-class">
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('class', 'button random-class button__primary');
  });

  test('render loading button', () => {
    const { getByRole } = render(
      <Button id="button" loading>
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Loading...');
    expect(buttonElement).toHaveAttribute('disabled');
    expect(buttonElement).toHaveClass('button button__primary opacity-50');
  });

  test('render disabled button', () => {
    const { getByRole } = render(
      <Button id="button" disabled>
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/content/i);
    expect(buttonElement).toHaveAttribute('disabled');
    expect(buttonElement).toHaveClass('button button__primary opacity-50');
  });
});

describe('clickeable behavior', () => {
  test('clicking a button', () => {
    const mockHandler = jest.fn();
    const { getByRole } = render(
      <Button id="button" onClick={mockHandler}>
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('Clicking a disabled button', () => {
    const mockHandler = jest.fn();
    const { getByRole } = render(
      <Button id="button" disabled onClick={mockHandler}>
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

  test('Clicking a loading button', () => {
    const mockHandler = jest.fn();
    const { getByRole } = render(
      <Button id="button" loading onClick={mockHandler}>
        Content
      </Button>,
    );

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

  test('Clicking a button without onClick props', () => {
    const mockHandler = jest.fn();

    const { getByRole } = render(<Button id="button">Content</Button>);

    const buttonElement = getByRole('button');

    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});

describe('render correctly button types', () => {
  test('render button with type button', () => {
    const { getByRole } = render(
      <Button id="button" type="button">
        Im a button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__primary');
    expect(buttonElement).toHaveTextContent(/im a button/i);
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  test('render button with submit type', () => {
    const { getByRole } = render(
      <Button id="button" type="submit">
        Im a submit button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__primary');
    expect(buttonElement).toHaveTextContent(/im a submit button/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});

describe('render button using multiple variants', () => {
  test('render with primary styles', () => {
    const { getByRole } = render(
      <Button id="button" type="submit" variant="primary">
        Im a primary button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__primary');
  });

  test('render with secondary styles', () => {
    const { getByRole } = render(
      <Button id="button" type="submit" variant="secondary">
        Im a secondary button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__secondary');
  });

  test('render with tertiary styles', () => {
    const { getByRole } = render(
      <Button id="button" type="submit" variant="tertiary">
        Im a tertiary button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button button__tertiary');
  });
});
