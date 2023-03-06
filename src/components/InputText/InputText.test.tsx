import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BsFillCircleFill } from 'react-icons/bs';
import { InputText } from './InputText';

type Props = {
  isDisabled?: boolean;
};

const TextComponent: React.FC<Props> = ({ isDisabled }) => {
  const [value, setValue] = useState('');

  const handleChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <InputText
      label="Username"
      id="username"
      name="username"
      value={value}
      onChange={handleChange}
      placeholder="Enter a word"
      disabled={isDisabled}
    />
  );
};

describe('text input works correctly', () => {
  test('it should allow values to be inputted', async () => {
    const { getByLabelText } = render(<TextComponent />);

    const inputEl = getByLabelText(/username/i);

    expect(inputEl).toHaveClass('input__field');

    expect(inputEl).toHaveValue('');
    expect(inputEl).toHaveAttribute('id', 'username');
    expect(inputEl).toHaveAttribute('name', 'username');
    expect(inputEl).toHaveAttribute('placeholder', 'Enter a word');
    expect(inputEl).toHaveAttribute('type', 'text');

    fireEvent.change(inputEl, { target: { value: 'Good Day' } });

    await waitFor(() => {
      expect(inputEl).toHaveValue('Good Day');
    });
  });

  test('it should have disabled input', async () => {
    const { getByLabelText } = render(<TextComponent isDisabled={true} />);

    const inputEl = getByLabelText(/username/i);

    expect(inputEl).toBeDisabled();

    fireEvent.change(inputEl, { target: { value: 'Good Day' } });
  });

  test('render pre-icon', () => {
    const { getByLabelText, getByTestId } = render(
      <InputText
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
        preIcon={<BsFillCircleFill />}
      />,
    );

    const inputEl = getByLabelText(/username/i);
    const preIconEl = getByTestId('pre-icon');

    expect(inputEl).toHaveClass('input__field input__field--preicon');
    expect(preIconEl).toBeInTheDocument();
  });

  test('render after-icon', () => {
    const { getByLabelText, getByTestId } = render(
      <InputText
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
        afterIcon={<BsFillCircleFill />}
      />,
    );

    const inputEl = getByLabelText(/username/i);
    const afterIconEl = getByTestId('after-icon');

    expect(inputEl).toHaveClass('input__field input__field--aftericon');
    expect(afterIconEl).toBeInTheDocument();
  });

  test('it should display error message', () => {
    const { getByLabelText, getByTestId, getByText } = render(
      <InputText
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
        error="Showing error"
      />,
    );

    const inputEl = getByLabelText(/username/i);
    const errorIcon = getByTestId('error-icon');
    const errorMessage = getByText(/showing error/i);

    expect(inputEl).toHaveClass('input__field input__field--error');
    expect(errorIcon).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });

  test('it should display subtitle', () => {
    const { getByText } = render(
      <InputText
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
        subtitle="Subtitle Text"
      />,
    );

    const subtitleEl = getByText(/subtitle text/i);

    expect(subtitleEl).toBeInTheDocument();
  });

  test('it should display label', () => {
    const { getByText } = render(
      <InputText
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
      />,
    );

    const labelEl = getByText(/username/i);

    expect(labelEl).toHaveTextContent('Username');
  });

  test('it should be a different input type', () => {
    const { getByLabelText } = render(
      <InputText
        type="password"
        label="Username"
        id="username"
        name="username"
        value=""
        onChange={() => {}}
        placeholder="Enter a word"
      />,
    );

    const inputEl = getByLabelText(/username/i);

    expect(inputEl).toHaveAttribute('type', 'password');
  });
});
