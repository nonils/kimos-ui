import React from 'react';
import { IStep } from '../../types';
import { CheckIcon } from '@heroicons/react/24/solid';

type StepProps = {
  steps: IStep[];
  currentStep: string;
  currentStepObject?: IStep;
  handleChangeStep: (selectedStepId: string) => void;
};

const Step: React.FC<StepProps> = ({ steps, handleChangeStep }) => {
  const handleOnClick = (stepId: string) => {
    handleChangeStep(stepId);
  };
  return (
    <nav aria-label="Progress">
      <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.complete ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <a onClick={() => handleOnClick(step.id)} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 group-hover:bg-gray-800">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : step.active ? (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions
              <a
                onClick={() => handleOnClick(step.id)}
                className="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-700">
                  <span className="text-gray-700">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-700">{step.name}</span>
              </a>
            ) : (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions
              <a onClick={step.onClickAction} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { Step };
