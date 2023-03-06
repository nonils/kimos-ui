import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('<Dropdown />', () => {
  test('it should open dropdown', () => {
    const { getByText, getByTestId, queryByRole } = render(
      <Dropdown id="Dropdown Element" title="Dropdown Element">
        <Dropdown.Item>
          <button type="button">Element 1</button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button type="button">Element 2</button>
        </Dropdown.Item>
      </Dropdown>,
    );

    const dropdownBtnEl = getByText('Dropdown Element');
    const dropIcon = getByTestId('dropicon');

    expect(dropIcon).toBeInTheDocument();

    expect(queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(dropdownBtnEl);

    expect(queryByRole('menu')).toBeInTheDocument();
    expect(getByText(/element 1/i)).toBeInTheDocument();
  });

  test('it should hide the drop icon', () => {
    const { queryByTestId } = render(
      <Dropdown title="Dropdown Element" dropIcon={false} id={'test'}>
        <Dropdown.Item>
          <button type="button">Test Item</button>
        </Dropdown.Item>
      </Dropdown>,
    );

    const dropIcon = queryByTestId('dropicon');

    expect(dropIcon).not.toBeInTheDocument();
  });
});
