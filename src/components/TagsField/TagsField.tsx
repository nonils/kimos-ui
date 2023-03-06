import React from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import classNames from 'classnames';
import '@pathofdev/react-tag-input/build/index.css';
import './styles.scss';

type Props = {
  name: string;
  id: string;
  onChange: (val: any) => void;
  value?: string[] | null;
  error?: string | boolean;
};

const TagsFieldComponent: React.FC<Props> = ({ name, id, onChange, value, error }) => {
  const wrapperClasses = classNames('tags', {
    tags__error: error,
  });

  return (
    <div id={id} title={name} className={wrapperClasses}>
      <ReactTagInput
        tags={value ? value : []}
        onChange={(newTags) => onChange(newTags)}
        placeholder="Type a Keyword..."
        removeOnBackspace={true}
      />
    </div>
  );
};

const TagsField = React.memo(TagsFieldComponent);

export { TagsField };
