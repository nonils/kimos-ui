import React from 'react';

type AppCardProps = {
  app: any;
  leftButtonFn: any;
  leftButtonText: string;
  rightButtonFn: any;
  rightButtonText: string;
};

const AppCard: React.FC<AppCardProps> = ({
  app,
  leftButtonFn,
  rightButtonFn,
  rightButtonText,
  leftButtonText,
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">{app.name}</h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              {app.description}
            </span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">{app.name}</p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <button
              className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              id={'left-button'}
              type={'button'}
              onClick={() => leftButtonFn(app.id)}
            >
              {leftButtonText}
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button
              className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              id={'right-button'}
              type={'button'}
              onClick={() => rightButtonFn(app.id)}
            >
              {rightButtonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
