import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TabPane from './TabPane';

describe('<TabPane />', () => {
  test('it should render a basic tabPane with custom class', () => {
    const { getByText } = render(<TabPane className="custom-class">Content</TabPane>);

    const tabPaneContentEl = getByText(/content/i);

    expect(tabPaneContentEl).toBeInTheDocument();
    expect(tabPaneContentEl).toHaveClass('custom-class');
  });
});
