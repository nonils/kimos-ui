import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';
import { formatBytes } from 'config/helpers';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import './styles.scss';

type Props = {
  id: string;
  disabled?: boolean;
  onChange: (evt: any) => void;
  errors?: string[];
  maxUploadSize?: number;
  icon?: React.ReactNode;
};

const FileDropzone: React.FC<Props> = ({
  disabled = false,
  onChange,
  errors = [],
  maxUploadSize = 16_000_000,
  icon,
  id = 'drop-input',
}) => {
  const handleFileUpload = async (files: any) => {
    if (disabled) return;
    if (files.length > 0) onChange(files);
  };

  const onDrop = useCallback(handleFileUpload, [onChange, disabled]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const allowToUpload = disabled ? undefined : { ...getRootProps() };

  const wrapperClasses = classNames('dropzone', {
    'dropzone--error': errors.length > 0,
    'dropzone--default': errors.length === 0,
  });

  return (
    <>
      <div id={id} data-testid="dropzone" {...allowToUpload}>
        <div className={wrapperClasses} data-testid="dropzone-inner">
          {icon && (
            <div id="dropzone-icon" data-testid="dropzone-icon">
              {icon}
            </div>
          )}
          <Stack direction="vertical" space="1">
            <Typography size="sm" align="center" className="dropzone__text">
              Drag files here or <span className="dropzone__accent">browse</span> to select files
            </Typography>
            <Typography size="sm" align="center" className="dropzone__text">
              Files can be up to {formatBytes(maxUploadSize, 'mb', 0)}MB
            </Typography>
          </Stack>
          <input id="file" data-testid="drop-input" {...getInputProps()} className="sr-only" />
        </div>
        {errors.length > 0 && (
          <div id="dropzone-errors" data-testid="dropzone-errors">
            <Stack direction="vertical" space="2" className="mt-1">
              {errors.map((error: string, index: number) => (
                <Typography key={index} size="xs" color="red" align="center">
                  {error}
                </Typography>
              ))}
            </Stack>
          </div>
        )}
      </div>
    </>
  );
};

export { FileDropzone };
