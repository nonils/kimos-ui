import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Stack } from './Stack';

const testCases: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

describe('<Dropzone />', () => {
  test('it should render a default horizontal list', () => {
    const { getByTestId } = render(
      <Stack direction="horizontal">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>,
    );

    const stackEl = getByTestId('stack');

    expect(stackEl).toHaveClass('flex items-start justify-start');
  });

  test('it should render a default vertical list', () => {
    const { getByTestId } = render(
      <Stack direction="vertical">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>,
    );

    const stackEl = getByTestId('stack');

    expect(stackEl).toHaveClass('block');
  });

  testCases.forEach((spaceNumber: any) => {
    test(`it should have ${spaceNumber} on horizontal space by default`, () => {
      const { getByTestId } = render(
        <Stack direction="horizontal" space={spaceNumber}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Stack>,
      );

      const stackEl = getByTestId('stack');

      if (spaceNumber === '10' || spaceNumber === '0') {
        expect(stackEl).toHaveClass(`flex items-start justify-start`);
      } else {
        expect(stackEl).toHaveClass(`flex space-x-${spaceNumber} items-start justify-start`);
      }
    });
  });

  testCases.forEach((spaceNumber: any) => {
    test(`it should have ${spaceNumber} on vertical space by default`, () => {
      const { getByTestId } = render(
        <Stack direction="vertical" space={spaceNumber}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Stack>,
      );

      const stackEl = getByTestId('stack');

      if (spaceNumber === '10' || spaceNumber === '0') {
        expect(stackEl).toHaveClass(`block`);
      } else {
        expect(stackEl).toHaveClass(`block space-y-${spaceNumber}`);
      }
    });
  });

  test(`it should have on vertical center and horizontal center on horizontal stack`, () => {
    const { getByTestId } = render(
      <Stack direction="horizontal" space="1" vAlign="center" hAlign="center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>,
    );

    const stackEl = getByTestId('stack');

    expect(stackEl).toHaveClass(`flex space-x-1 items-center justify-center`);
  });

  test(`it should not have vertical and horizontal alignment on vertical stack`, () => {
    const { getByTestId } = render(
      <Stack direction="vertical" space="1" vAlign="center" hAlign="center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>,
    );

    const stackEl = getByTestId('stack');

    expect(stackEl).toHaveClass(`block space-y-1`);
    expect(stackEl).not.toHaveClass(`items-center justify-center`);
  });
});
