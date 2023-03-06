import React from 'react';
// @ts-ignore
import { PhotographIcon } from '@heroicons/react/outline';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { FileDropzone } from './FileDropzone';

describe('<Dropzone />', () => {
  test('it should drop', () => {
    const mockHandler = jest.fn();

    const { getByTestId } = render(<FileDropzone id="dropzone" onChange={mockHandler} />);

    window.URL.createObjectURL = jest.fn().mockImplementation(() => 'url');

    const inputEl = getByTestId('drop-input');
    const dropzoneInnerEl = getByTestId('dropzone-inner');

    const file = new File(['file'], 'ping.json', {
      type: 'application/json',
    });

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });

    expect(inputEl).toBeInTheDocument();
    expect(dropzoneInnerEl).toHaveClass('dropzone dropzone--default');
  });

  test('it should have icon', () => {
    const { getByTestId } = render(
      <FileDropzone icon={<PhotographIcon />} id="dropzone" onChange={() => null} />,
    );

    const iconEl = getByTestId('dropzone-icon');

    expect(iconEl).toBeInTheDocument();
  });

  test('should render errors', () => {
    const { getByTestId } = render(
      <FileDropzone errors={['Error 1', 'Error 2']} id="dropzone" onChange={() => null} />,
    );

    const dropzoneInnerEl = getByTestId('dropzone-inner');
    const dropzoneErrors = getByTestId('dropzone-errors');

    expect(dropzoneInnerEl).toHaveClass('dropzone dropzone--error');
    expect(dropzoneErrors).toBeInTheDocument();
  });
});
