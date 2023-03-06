import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProgressLoader } from './ProgressLoader';

describe('progress loader works correctly', () => {
  test('it should display a loader with label', () => {
    const { getByText } = render(<ProgressLoader />);

    const labelElement = getByText(/loading.../i);
    expect(labelElement).toBeInTheDocument();
  });

  test('it should display a loader without', () => {
    const { queryByText } = render(<ProgressLoader showLabel={false} />);

    const labelElement = queryByText(/loading.../i);

    expect(labelElement).not.toBeInTheDocument();
  });
});
