import React from 'react';

type CreateActionButtonProps = {
  text: string;
  action: () => void;
};

const CreateActionButton: React.FC<CreateActionButtonProps> = ({ text, action }) => {
  return (
    <>
      <button
        onClick={action}
        type="button"
        className="order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3"
      >
        {text}
      </button>
    </>
  );
};

export { CreateActionButton };
