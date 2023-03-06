import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('<Typography />', () => {
  test('it should render a default typography', () => {
    const { getByText } = render(<Typography>Text Here</Typography>);

    expect(getByText(/text here/i)).toHaveClass('text-base text-left text-black font-brown');
  });

  test('it should have xl font-size', () => {
    const { getByText } = render(<Typography size="xl">Text Here</Typography>);

    expect(getByText(/text here/i)).toHaveClass('text-xl text-left text-black font-brown');
  });

  test('it should be a centered text', () => {
    const { getByText } = render(<Typography align="center">Text Here</Typography>);

    expect(getByText(/text here/i)).toHaveClass('text-base text-center text-black font-brown');
  });

  test('it should a color in text', () => {
    const { getByText } = render(<Typography color="blue-200">Text Here</Typography>);

    expect(getByText(/text here/i)).toHaveClass('text-base text-left text-blue-200 font-brown');
  });

  test('it should have silvia font family', () => {
    const { getByText } = render(<Typography family="silvia">Text Here</Typography>);

    expect(getByText(/text here/i)).toHaveClass('text-base text-left text-black font-silvia');
  });
});
