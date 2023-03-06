import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  id?: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: (value: any) => void;
  variant?: 'primary' | 'secondary';
  padder?: 'default' | 'none';
  centered?: boolean;
  afterLeave?: () => void;
  title?: string | React.ReactNode;
};

const FullModal: React.FC<Props> = ({
  children,
  open,
  onToggle,
  padder = 'default',
  centered,
  id,
  afterLeave,
  title,
}) => {
  const padderClasses = classNames('modal__padder', {
    'modal__padder--full': padder === 'default',
    'modal__padder--none': padder === 'none',
  });

  const bodyClasses = classNames('modal__body', {
    'modal__body--centered': centered,
  });

  const modalBodyClasses = classNames('modal__inner', padderClasses, centered);

  const headerClasses = classNames('modal__header', {
    'modal__header--padder': padder === 'default',
  });

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={afterLeave}>
      <Dialog as="div" static className="modal__wrapper" open={open} onClose={onToggle}>
        <div className="modal" id={id}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <main className={modalBodyClasses}>
              <div>
                <header className={headerClasses}>
                  {title && <div>{title}</div>}
                  <button
                    type="button"
                    className="modal__closer"
                    onClick={() => onToggle(false)}
                    id="modal-close"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="modal__icon" aria-hidden="true" />
                  </button>
                </header>
              </div>
              <div className={bodyClasses}>{children}</div>
            </main>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { FullModal };
