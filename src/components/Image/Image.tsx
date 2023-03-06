import React, { useMemo } from 'react';
import classNames from 'classnames';
import { allowedImages } from 'config/helpers';
import { AudioIcon, PDFIcon, VideoIcon, DocumentIcon, ImageIcon } from 'components/icons';
import { IKeyValue } from 'types/common';
import './styles.scss';

type Props = {
  id: string;
  src?: string;
  alt?: string;
  imageClassNames?: string;
  placeholderImageClass?: string;
  fileType?: string;
  isPlaceholder?: boolean;
};

const Image: React.FC<Props> = ({
  id,
  src,
  alt = 'default asset element',
  imageClassNames = '',
  placeholderImageClass = 'h-52',
  fileType = 'jpeg',
  isPlaceholder = false,
}) => {
  const removeAutoHeight = useMemo(() => {
    if (!imageClassNames.includes('h-')) {
      return 'h-auto';
    }

    return null;
  }, [imageClassNames]);

  const imageClasses = classNames('max-w-full', imageClassNames, removeAutoHeight);

  const wrapperClasses = classNames('image', placeholderImageClass);

  const renderPlaceholder = useMemo(() => {
    const isNotAllowed = fileType && !allowedImages.includes(fileType);
    if (isNotAllowed) {
      return true;
    }
    return false;
  }, [fileType]);

  const resolveBackgroundColorByType = () => {
    const availableBackgrounds: IKeyValue = {
      pdf: 'bg-red-wine-km',
      mp3: 'bg-red-km',
      wav: 'bg-red-km',
      mp4: 'bg-yellow-km',
      avi: 'bg-yellow-km',
      mov: 'bg-yellow-km',
      doc: 'bg-teal-km',
      docx: 'bg-teal-km',
    };

    return (fileType && availableBackgrounds[fileType]) || 'bg-blue-km';
  };

  const renderIconByFileType = () => {
    switch (fileType) {
      case `pdf`: {
        return <PDFIcon />;
      }
      case `mp3`:
      case `wav`: {
        return <AudioIcon />;
      }
      case `mp4`:
      case `avi`:
      case `mov`: {
        return <VideoIcon />;
      }
      case `doc`:
      case `docx`: {
        return <DocumentIcon />;
      }
      case `gif`:
      case `webp`:
      case `svg`:
      case `jpg`:
      case `png`:
      default: {
        return <ImageIcon />;
      }
    }
  };

  const placeholderImageClasses = classNames('image__placeholder', resolveBackgroundColorByType());

  if (isPlaceholder && renderPlaceholder) {
    return (
      <div className={wrapperClasses}>
        <div
          id={id}
          className={placeholderImageClasses}
          role="img"
          aria-label="A placeholder image that shows file type"
        >
          {renderIconByFileType()}
        </div>
      </div>
    );
  }

  return <img id={id} src={src} alt={alt} className={imageClasses} />;
};

export { Image };
