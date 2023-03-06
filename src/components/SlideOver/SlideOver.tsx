import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Stack } from '../Stack/Stack';
import { useLockBodyScroll } from 'react-use';
import './styles.scss';
import classNames from 'classnames';

type Props = {
  variant?: 'primary' | 'secondary';
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  title: string | React.ReactNode;
  afterLeave?: () => void;
  afterTitleContent?: React.ReactNode;
  padder?: boolean;
};

const SlideOverComponent: React.FC<Props> = ({
  variant = 'primary',
  open,
  onToggle,
  children,
  title,
  afterLeave,
  afterTitleContent,
  padder = true,
}) => {
  useLockBodyScroll(open);

  const innerClass = classNames('slideover__inner', {
    'slideover__inner--primary': variant === 'primary',
    'slideover__inner--secondary': variant === 'secondary',
  });

  const padderClass = classNames('slideover__box custom__scroll', {
    'slideover__box--padder': padder,
  });

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={afterLeave}>
      <Dialog as="div" static className="slideover__wrapper" open={open} onClose={onToggle}>
        <div className="slideover">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="slideover__overlay" />
          </Transition.Child>

          <div className="slideover__body">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="slideover__content">
                <div className={innerClass}>
                  <Stack direction="horizontal" space="3" className="slideover__header">
                    <Stack
                      direction="horizontal"
                      className="slideover__left"
                      hAlign="between"
                      vAlign="center"
                    >
                      <Dialog.Title className="slideover__title">{title}</Dialog.Title>
                      {afterTitleContent && (
                        <div data-testid="after-title-content">{afterTitleContent}</div>
                      )}
                    </Stack>
                    <div className="slideover__right">
                      <button
                        id="modal-closer"
                        className="slideover__closer"
                        onClick={onToggle}
                        data-testid="modal-closer"
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="slideover__closer__icon" aria-hidden="true" />
                      </button>
                    </div>
                  </Stack>
                  <div className={padderClass}>{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const SlideOver = React.memo(SlideOverComponent);

export { SlideOver };
