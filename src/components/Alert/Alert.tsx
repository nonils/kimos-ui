import React, { useState, Fragment } from 'react';
import {
  XCircleIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';
import './styles.scss';

type Props = {
  message: string;
  type?: 'success' | 'danger' | 'warning' | 'info';
};

const Alert: React.FC<Props> = ({ message, type = 'info' }) => {
  const [show, setShow] = useState<boolean>(true);

  const alertClasses = classNames('alert', {
    'alert--success': type === 'success',
    'alert--danger': type === 'danger',
    'alert--warning': type === 'warning',
    'alert--info': type === 'info',
  });

  const renderIconByType = {
    success: <CheckCircleIcon aria-hidden="true" />,
    warning: <ExclamationTriangleIcon aria-hidden="true" />,
    danger: <XCircleIcon aria-hidden="true" />,
    info: <InformationCircleIcon aria-hidden="true" />,
  };

  return (
    <Transition
      as={Fragment}
      show={show}
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className={alertClasses}>
        <div className="alert__left">{renderIconByType[type]}</div>
        <div className="alert__right">
          <h3 className="alert__message">{message}</h3>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" className="alert__closer" onClick={() => setShow(false)}>
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export { Alert };
