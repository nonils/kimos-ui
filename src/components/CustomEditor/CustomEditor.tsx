import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FormikErrors } from 'formik';
import classNames from 'classnames';

type Props = {
  id: string;
  preIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: any) => void;
  name: string;
  type?: 'text' | 'password';
  error?: string | FormikErrors<any> | boolean;
  subtitle?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: 'light';
};

const CustomEditor: React.FC<Props> = ({
  id,
  label,
  name,
  value = '',
  onChange = (event) => {
    console.log(event);
  },
  disabled = false,
  variant,
}) => {
  const editorRef = useRef(null);
  const isLightVariant = variant === 'light';
  const labelClasses = classNames('input__label', {
    'input__label--light': isLightVariant,
  });
  return (
    <div className="input">
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <Editor
        onInit={(evt: any, editor: any) => (editorRef.current = editor)}
        id={id}
        apiKey="6pot5f43h40qsu389wq6he3oukpt2f9r4ygtrknxpb544csg"
        disabled={disabled}
        textareaName={name}
        value={value}
        onEditorChange={(attr) => {
          onChange({ target: { value: attr, name } });
        }}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </div>
  );
};

export { CustomEditor };
