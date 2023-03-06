import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Select } from './Select';

const SelectControlledComponent: React.FC = () => {
  const options = [
    {
      value: 1,
      label: 'Option 1',
    },
    {
      value: 2,
      label: 'Option 2',
    },
  ];

  return (
    <Select
      name="example-option"
      id="example-option"
      options={options}
      label="label"
      onChange={() => {}}
    />
  );
};

describe('<Select />', () => {
  test('it should render the dropdown list', async () => {
    const { getByText, getByTestId } = render(<SelectControlledComponent />);

    const labelEl = getByText('label');
    const selectEl = getByTestId('select-wrapper');

    expect(labelEl).toBeInTheDocument();
    expect(selectEl).toBeInTheDocument();
  });
});
