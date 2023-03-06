import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { TabsNav } from './Tabs';

const tabs = ['tab 1', 'tab 2'];

describe('<Tabs />', () => {
  test('it should have first tab active showing first tab content', () => {
    const { getByTestId, getByText, queryByText } = render(
      <TabsNav tabs={tabs}>
        <div>element 1</div>
        <div>element 2</div>
      </TabsNav>,
    );

    const firstButtonTab = getByTestId('tab-button-0');
    const secondButtonTab = getByTestId('tab-button-1');
    const firstTabContent = getByText(/element 1/i);
    const secondTabContent = queryByText(/element 2/i);

    expect(firstButtonTab).toHaveClass('tab__button tab__button--active');
    expect(secondButtonTab).not.toHaveClass('tab__button tab__button--active');
    expect(firstTabContent).toBeInTheDocument();
    expect(secondTabContent).not.toBeInTheDocument();
  });

  test('it should click on the second tab and show the second tab content', () => {
    const { getByTestId, queryByText } = render(
      <TabsNav tabs={tabs}>
        <div>element 1</div>
        <div>element 2</div>
      </TabsNav>,
    );

    const firstButtonTab = getByTestId('tab-button-0');
    const secondButtonTab = getByTestId('tab-button-1');

    fireEvent.click(secondButtonTab);

    expect(firstButtonTab).not.toHaveClass('tab__button tab__button--active');
    expect(secondButtonTab).toHaveClass('tab__button tab__button--active');

    const secondTabContent = queryByText(/element 2/i);
    expect(secondTabContent).toBeInTheDocument();
  });
});
