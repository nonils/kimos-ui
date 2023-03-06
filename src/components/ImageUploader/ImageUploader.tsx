import { FileDropzone } from '../FileDropzone/FileDropzone';
import { Button } from '../Button/Button';
import { FormattedMessage } from 'react-intl';
import React from 'react';

type ImageUploaderProps = {
  value: string;
  onChange: (value: any) => void;
  onRemoveImage?: () => void;
  error: string;
  label: string;
  id: string;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  value,
  onChange,
  label,
  onRemoveImage,
  error,
  id,
}: ImageUploaderProps) => {
  const handleRemoveImage = () => {
    if (onRemoveImage) {
      onRemoveImage();
    }
  };

  const renderImageUploader = function () {
    if (!value) {
      return <FileDropzone onChange={onChange} errors={error ? [error] : []} id={id} />;
    } else {
      return (
        <div className="sm:col-span-3">
          <div className="min-h-80 min-w-80 aspect-w-3 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={value}
              className="h-full w-full object-contain lg:h-full lg:w-full"
              alt="logo"
            />
          </div>
          <Button id={'removeImage'} variant="secondary" onClick={handleRemoveImage}>
            <FormattedMessage id="store.form.remove.image" />
          </Button>
        </div>
      );
    }
  };
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {renderImageUploader()}
    </>
  );
};

export { ImageUploader };
