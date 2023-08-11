import React from 'react';
import { ITemplate } from '../../types';
type TemplateCardProps = {
  template: ITemplate;
  action: (newSelectedTemplate: ITemplate) => void;
};

const TemplateCard: React.FC<TemplateCardProps> = ({ template, action }) => {
  const handleClick = () => {
    action(template);
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="flex flex-1 flex-col p-8" onClick={handleClick}>
        <img
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          src={template.templateImageUrl}
          alt={template.name}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">{template.name}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{template.name}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {template.url}
            </span>
          </dd>
        </dl>
      </div>
    </>
  );
};

export { TemplateCard };
