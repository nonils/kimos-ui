import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('form works correctly', () => {
  test('Form can be submitted', () => {
    const mockSubmit = jest.fn();

    const { getByTestId } = render(
      <Form id="form" onSubmit={mockSubmit}>
        <h1>Form</h1>
      </Form>,
    );

    const formElement = getByTestId('form');

    fireEvent.submit(formElement);
    expect(formElement).toHaveAttribute('id', 'form');
    expect(mockSubmit).toHaveBeenCalled();
  });

  test('Form is loading', () => {
    const { getByTestId } = render(
      <Form id="form" loading={true} onSubmit={() => {}}>
        <h1>Form</h1>
      </Form>,
    );

    const fieldsetElement = getByTestId('form-fieldset');

    expect(fieldsetElement).toHaveAttribute('aria-busy', 'true');
    expect(fieldsetElement).toHaveAttribute('disabled', '');
  });
});
