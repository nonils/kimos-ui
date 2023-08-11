import { toast } from 'react-toastify';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import React, { useCallback } from 'react';

const useToast = () => {
  const success = useCallback((msg: string) => {
    toast.success(msg, {
      icon: <CheckCircleIcon className="w-5 h-5" />,
    });
  }, []);

  const danger = useCallback((msg: string) => {
    toast.error(msg, {
      icon: <XCircleIcon className="w-5 h-5" />,
    });
  }, []);

  const warning = useCallback((msg: string) => {
    toast.warn(msg, {
      icon: <ExclamationTriangleIcon className="w-5 h-5" />,
    });
  }, []);

  const info = useCallback((msg: string) => {
    toast.info(msg, {
      icon: <InformationCircleIcon className="w-5 h-5" />,
    });
  }, []);

  return { success, danger, warning, info };
};

export { useToast };
