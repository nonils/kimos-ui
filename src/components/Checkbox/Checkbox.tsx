import React from 'react';

type CheckboxProps = {
  name: string;
  id: string;
  label?: string;
  shortDescription?: string;
  value?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  id,
  label,
  shortDescription,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="h-4 w-4 rounded border-gray-300 text-red-300 focus:ring-red-300"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500">{shortDescription}</p>
      </div>
    </div>
  );
};

export { Checkbox };
